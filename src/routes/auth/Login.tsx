import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authService } from "../../services/authService";

const EMAIL_CACHE_KEY = "gabaritol_user_email";
const COOLDOWN_KEY = "gabaritol_code_cooldown";
const COOLDOWN_TIME = 60;

const emailSchema = z.object({
    email: z
        .string()
        .min(1, "POR FAVOR, INSIRA UM E-MAIL.")
        .pipe(z.email({ error: "FORMATO DE E-MAIL INVÁLIDO." })),
});

const codeSchema = z.object({
    code: z.string().length(5, "O CÓDIGO DEVE CONTER 5 DÍGITOS."),
});

type EmailFormData = z.infer<typeof emailSchema>;
type CodeFormData = z.infer<typeof codeSchema>;

export default function Login() {
    const [step, setStep] = useState<"email" | "code">("email");
    const [apiError, setApiError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [cooldown, setCooldown] = useState(0);
    const [currentEmail, setCurrentEmail] = useState(() => {
        return localStorage.getItem(EMAIL_CACHE_KEY) || "";
    });

    const emailForm = useForm<EmailFormData>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: currentEmail,
        },
    });

    const codeForm = useForm<CodeFormData>({
        resolver: zodResolver(codeSchema),
        defaultValues: {
            code: "",
        },
    });

    useEffect(() => {
        const lastSent = localStorage.getItem(COOLDOWN_KEY);
        if (lastSent) {
            const elapsed = Math.floor((Date.now() - Number(lastSent)) / 1000);
            if (elapsed < COOLDOWN_TIME) {
                setCooldown(COOLDOWN_TIME - elapsed);
            }
        }
    }, []);

    useEffect(() => {
        if (cooldown <= 0) return;

        const timer = setInterval(() => {
            setCooldown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [cooldown]);

    const startCooldown = () => {
        setCooldown(COOLDOWN_TIME);
        localStorage.setItem(COOLDOWN_KEY, Date.now().toString());
    };

    const handleEmailSubmit = async (data: EmailFormData) => {
        if (cooldown > 0) return;

        setApiError("");
        setIsLoading(true);

        try {
            await authService.registerUser(data.email);
            localStorage.setItem(EMAIL_CACHE_KEY, data.email);
            setCurrentEmail(data.email);
            startCooldown();
            setStep("code");
        } catch (err: any) {
            const status = err?.response?.status;

            if (status === 400 || status === 409 || status === 422) {
                try {
                    await authService.requestCodeMail({ email: data.email });
                    localStorage.setItem(EMAIL_CACHE_KEY, data.email);
                    setCurrentEmail(data.email);
                    startCooldown();
                    setStep("code");
                    return;
                } catch (loginErr: any) {
                    setApiError("ERRO AO ENVIAR CÓDIGO DE LOGIN.");
                    return;
                }
            }

            const apiMessage = err?.response?.data?.message;
            setApiError(apiMessage || "ERRO AO PROCESSAR E-MAIL.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCodeSubmit = async (data: CodeFormData) => {
        setApiError("");
        setIsLoading(true);

        try {
            await authService.loginWithCode({
                email: currentEmail,
                code: data.code,
            });
            localStorage.setItem(EMAIL_CACHE_KEY, currentEmail);
            localStorage.removeItem(COOLDOWN_KEY);
            window.location.href = "/gl/generate";
        } catch (err: any) {
            const apiMessage = err?.response?.data?.message;
            setApiError(apiMessage || "CÓDIGO INVÁLIDO OU EXPIRADO.");
        } finally {
            setIsLoading(false);
        }
    };

    const activeError =
        apiError ||
        emailForm.formState.errors.email?.message ||
        codeForm.formState.errors.code?.message;

    return (
        <div className="DepartureMono min-h-screen bg-[#141414] text-[#e5e5e5] font-mono p-8 max-w-7xl mx-auto flex flex-col items-center justify-center selection:bg-amber-500 selection:text-black">
            <div className="w-full max-w-md bg-[#1a1a1a] border border-[#262626] p-8 shadow-2xl relative">
                <div className="text-[10px] text-[#737373] uppercase tracking-widest mb-6 pb-2 border-b border-[#262626] flex justify-between">
                    <span>■ AUTENTICAÇÃO · GABARITOL</span>
                    <span className="text-amber-500">
                        PASSO {step === "email" ? "1/2" : "2/2"}
                    </span>
                </div>

                {activeError && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs uppercase tracking-wide">
                        ⚠ {activeError}
                    </div>
                )}

                {step === "email" && (
                    <form
                        onSubmit={emailForm.handleSubmit(handleEmailSubmit)}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-widest text-[#a3a3a3] IbmPlexMono">
                                E-mail Corporativo
                            </label>
                            <input
                                type="email"
                                disabled={isLoading}
                                placeholder="SEU MELHOR EMAIL"
                                {...emailForm.register("email")}
                                className="w-full bg-[#141414] border border-[#262626] placeholder:text-[#525252] text-[#e5e5e5] placeholder:uppercase tracking-wider py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors text-sm IbmPlexMono disabled:opacity-50"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading || cooldown > 0}
                            className="cursor-pointer mt-2 w-full border border-amber-500 bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-500 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold py-3 px-6 rounded-sm transition-all duration-300 uppercase tracking-widest"
                        >
                            {isLoading
                                ? "ENVIANDO..."
                                : cooldown > 0
                                  ? `AGUARDE (${cooldown}S)`
                                  : "> RECEBER CÓDIGO"}
                        </button>
                    </form>
                )}

                {step === "code" && (
                    <form
                        onSubmit={codeForm.handleSubmit(handleCodeSubmit)}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <label className="text-xs uppercase tracking-widest text-[#a3a3a3] IbmPlexMono">
                                    Insira o código enviado para{" "}
                                    <span className="text-amber-500 lowercase">
                                        {currentEmail}
                                    </span>
                                </label>
                            </div>

                            <input
                                type="text"
                                maxLength={5}
                                disabled={isLoading}
                                placeholder="00000"
                                {...codeForm.register("code", {
                                    onChange: (e) => {
                                        const value = e.target.value
                                            .replace(/[^a-zA-Z0-9]/g, "")
                                            .toUpperCase();
                                        codeForm.setValue("code", value);
                                    },
                                })}
                                className="w-full bg-[#141414] border border-[#262626] placeholder:text-[#525252] text-[#e5e5e5] tracking-[0.5em] text-center font-bold py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors text-lg IbmPlexMono disabled:opacity-50 uppercase"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="cursor-pointer mt-2 w-full border border-amber-500 bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-500 disabled:opacity-40 disabled:border-[#262626] disabled:text-[#737373] disabled:cursor-not-allowed disabled:hover:bg-transparent text-xs font-bold py-3 px-6 rounded-sm transition-all duration-300 uppercase tracking-widest"
                        >
                            {isLoading ? "AUTENTICANDO..." : "PROSSEGUIR >"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
