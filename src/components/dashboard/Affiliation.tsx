import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const codeSchema = z.object({
    code: z.string().length(5, "O CÓDIGO DEVE CONTER 5 DÍGITOS."),
});

type CodeFormData = z.infer<typeof codeSchema>;

export default function Affiliation() {
    const [apiError, setApiError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const codeForm = useForm<CodeFormData>({
        resolver: zodResolver(codeSchema),
        defaultValues: {
            code: "",
        },
    });

    const handleCodeSubmit = async (data: CodeFormData) => {
        setIsLoading(true);
        setApiError("");
        setSuccessMessage("");

        try {
            // Lógica de envio da requisição da API de afiliação
            console.log("Código de afiliação enviado:", data.code);

            // Simulação de resposta da API
            setSuccessMessage("CÓDIGO VINCULADO COM SUCESSO!");
            codeForm.reset();
        } catch (err) {
            setApiError("CÓDIGO INVÁLIDO OU EXPIRADO.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full flex items-center justify-center p-4 py-12">
            <div className="w-full max-w-md bg-[#1a1a1a] border border-[#262626] p-8 shadow-2xl relative">
                <div className="text-[10px] text-[#737373] uppercase tracking-widest mb-6 pb-2 border-b border-[#262626] flex justify-between">
                    <span>■ AFILIAÇÃO · GABARITOL</span>
                    <span className="text-amber-500">CÓDIGO DE ACESSO</span>
                </div>

                {apiError && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs uppercase tracking-wide">
                        ⚠ {apiError}
                    </div>
                )}

                {successMessage && (
                    <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs uppercase tracking-wide">
                        ✓ {successMessage}
                    </div>
                )}

                <form
                    onSubmit={codeForm.handleSubmit(handleCodeSubmit)}
                    className="flex flex-col gap-4"
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-[#a3a3a3] IbmPlexMono">
                            INSIRA O CÓDIGO DE AFILIAÇÃO
                        </label>

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

                        {codeForm.formState.errors.code && (
                            <span className="text-[10px] text-red-400 mt-1">
                                {codeForm.formState.errors.code.message}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="cursor-pointer mt-2 w-full border border-amber-500 bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-500 disabled:opacity-40 disabled:border-[#262626] disabled:text-[#737373] disabled:cursor-not-allowed disabled:hover:bg-transparent text-xs font-bold py-3 px-6 rounded-sm transition-all duration-300 uppercase tracking-widest"
                    >
                        {isLoading ? "AUTENTICANDO..." : "VINCULAR CÓDIGO >"}
                    </button>
                </form>
            </div>
        </div>
    );
}
