import { useState } from "react";
import { authService } from "../../services/authService";

export default function Login() {
    const [step, setStep] = useState<"email" | "code">("email");
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (emailStr: string) => {
        return /\S+@\S+\.\S+/.test(emailStr);
    };

    const handleEmailSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        setError("");

        if (!email) {
            setError("POR FAVOR, INSIRA UM E-MAIL.");
            return;
        }

        if (!validateEmail(email)) {
            setError("FORMATO DE E-MAIL INVÁLIDO.");
            return;
        }

        setIsLoading(true);

        try {
            await authService.registerUser(email);
            setStep("code");
        } catch (err: any) {
            const status = err?.response?.status;

            if (status === 400 || status === 409 || status === 422) {
                try {
                    await authService.requestCodeMail({ email });
                    setStep("code");
                    return;
                } catch (loginErr: any) {
                    const loginMsg = loginErr?.response?.data?.message;
                    setError(loginMsg || "ERRO AO ENVIAR CÓDIGO DE LOGIN.");
                    return;
                }
            }

            const apiMessage = err?.response?.data?.message;
            setError(
                apiMessage || "ERRO AO REGISTRAR E-MAIL. TENTE NOVAMENTE.",
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleCodeSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        setError("");

        if (code.length < 5) {
            setError("O CÓDIGO DEVE CONTER 5 DÍGITOS.");
            return;
        }

        setIsLoading(true);

        try {
            await authService.loginWithCode({ email, code });

            window.location.href = "/gl/generate";
        } catch (err: any) {
            const apiMessage = err?.response?.data?.message;
            setError(apiMessage || "CÓDIGO INVÁLIDO OU EXPIRADO.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="DepartureMono min-h-screen bg-[#141414] text-[#e5e5e5] font-mono p-8 max-w-7xl mx-auto flex flex-col items-center justify-center selection:bg-amber-500 selection:text-black">
            <div className="w-full max-w-md bg-[#1a1a1a] border border-[#262626] p-8 shadow-2xl relative">
                <div className="text-[10px] text-[#737373] uppercase tracking-widest mb-6 pb-2 border-b border-[#262626] flex justify-between">
                    <span>■ AUTENTICAÇÃO · GABARITOL</span>
                    <span className="text-amber-500">
                        PASSO {step === "email" ? "1/2" : "2/2"}
                    </span>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs uppercase tracking-wide">
                        ⚠ {error}
                    </div>
                )}

                {step === "email" && (
                    <form
                        onSubmit={handleEmailSubmit}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-widest text-[#a3a3a3] IbmPlexMono">
                                E-mail Corporativo
                            </label>
                            <input
                                type="email"
                                value={email}
                                disabled={isLoading}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="SEU MELHOR EMAIL"
                                className="w-full bg-[#141414] border border-[#262626] placeholder:text-[#525252] text-[#e5e5e5] placeholder:uppercase tracking-wider py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors text-sm IbmPlexMono disabled:opacity-50"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="cursor-pointer mt-2 w-full border border-amber-500 bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-500 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold py-3 px-6 rounded-sm transition-all duration-300 uppercase tracking-widest"
                        >
                            {isLoading ? "ENVIANDO..." : "> RECEBER CÓDIGO"}
                        </button>
                    </form>
                )}

                {step === "code" && (
                    <form
                        onSubmit={handleCodeSubmit}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-widest text-[#a3a3a3] IbmPlexMono">
                                Insira o código enviado para{" "}
                                <span className="text-amber-500 lowercase">
                                    {email}
                                </span>
                            </label>
                            <input
                                type="text"
                                maxLength={5}
                                value={code}
                                disabled={isLoading}
                                onChange={(e) =>
                                    setCode(e.target.value.replace(/\D/g, ""))
                                }
                                placeholder="00000"
                                className="w-full bg-[#141414] border border-[#262626] placeholder:text-[#525252] text-[#e5e5e5] tracking-[0.5em] text-center font-bold py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors text-lg IbmPlexMono disabled:opacity-50"
                            />
                        </div>

                        <div className="flex gap-3 mt-2">
                            <button
                                type="button"
                                disabled={isLoading}
                                onClick={() => {
                                    setStep("email");
                                    setError("");
                                    setCode("");
                                }}
                                className="cursor-pointer w-1/3 border border-[#333] hover:border-[#525252] text-[#a3a3a3] hover:text-white disabled:opacity-50 text-xs font-bold py-3 px-4 rounded-sm transition-all duration-300 uppercase tracking-wider"
                            >
                                Voltar
                            </button>

                            <button
                                type="submit"
                                disabled={code.length < 5 || isLoading}
                                className="cursor-pointer w-2/3 border border-amber-500 bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-500 disabled:opacity-40 disabled:border-[#262626] disabled:text-[#737373] disabled:cursor-not-allowed disabled:hover:bg-transparent text-xs font-bold py-3 px-6 rounded-sm transition-all duration-300 uppercase tracking-widest"
                            >
                                {isLoading ? "AUTENTICANDO..." : "PROSSEGUIR >"}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
