import { useState } from "react";

export default function Login() {
    const [step, setStep] = useState<"email" | "code">("email");
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (emailStr: string) => {
        return /\S+@\S+\.\S+/.test(emailStr);
    };

    const handleEmailSubmit = (e: React.SubmitEvent) => {
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

        setStep("code");
    };

    const handleCodeSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        setError("");

        if (code.length < 5) {
            setError("O CÓDIGO DEVE CONTER 5 DÍGITOS.");
            return;
        }

        window.location.href = "/gl/generate";
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
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="SEU MELHOR EMAIL"
                                className="w-full bg-[#141414] border border-[#262626] placeholder:text-[#525252] text-[#e5e5e5] placeholder:uppercase tracking-wider py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors text-sm IbmPlexMono"
                            />
                        </div>

                        <button
                            type="submit"
                            className="cursor-pointer mt-2 w-full border border-amber-500 bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-500 text-xs font-bold py-3 px-6 rounded-sm transition-all duration-300 uppercase tracking-widest"
                        >
                            &gt; Receber código
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
                                onChange={(e) =>
                                    setCode(e.target.value.replace(/\D/g, ""))
                                }
                                placeholder="00000"
                                className="w-full bg-[#141414] border border-[#262626] placeholder:text-[#525252] text-[#e5e5e5] tracking-[0.5em] text-center font-bold py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors text-lg IbmPlexMono"
                            />
                        </div>

                        <div className="flex gap-3 mt-2">
                            <button
                                type="button"
                                onClick={() => {
                                    setStep("email");
                                    setError("");
                                }}
                                className="cursor-pointer w-1/3 border border-[#333] hover:border-[#525252] text-[#a3a3a3] hover:text-white text-xs font-bold py-3 px-4 rounded-sm transition-all duration-300 uppercase tracking-wider"
                            >
                                Voltar
                            </button>

                            <button
                                type="submit"
                                disabled={code.length < 5}
                                className="cursor-pointer w-2/3 border border-amber-500 bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-500 disabled:opacity-40 disabled:border-[#262626] disabled:text-[#737373] disabled:cursor-not-allowed disabled:hover:bg-transparent text-xs font-bold py-3 px-6 rounded-sm transition-all duration-300 uppercase tracking-widest"
                            >
                                Prosseguir &gt;
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
