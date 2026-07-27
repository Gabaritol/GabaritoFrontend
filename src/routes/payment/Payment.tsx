import { Link } from "@tanstack/react-router";
import { useState } from "react";

export default function Payment() {
    const [paymentMethod, setPaymentMethod] = useState<"PIX" | "CREDIT_CARD">(
        "PIX",
    );
    const [cpf, setCpf] = useState("");

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);

        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        setCpf(value);
    };

    return (
        <div className="DepartureMono min-h-screen bg-[#141414] text-[#e5e5e5] font-mono text-xs selection:bg-amber-500 selection:text-black flex justify-center items-center p-0 md:p-6 uppercase tracking-wider">
            <div className="w-full min-h-screen md:min-h-[700px] grid grid-cols-1 lg:grid-cols-12 shadow-2xl relative overflow-hidden">
                <div className="lg:col-span-7 bg-[#171717] p-8 md:p-12 flex flex-col justify-between relative border-r border-[#262626]">
                    <div className="hidden lg:block absolute top-0 bottom-0 -right-[10px] w-[10px] z-20 pointer-events-none bg-repeat-y bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2210%22%20height=%2220%22%20viewBox=%220%200%2010%2020%22%3E%3Cpolygon%20points=%220,0%2010,10%200,20%22%20fill=%22%23ffffff%22/%3E%3C/svg%3E')]" />

                    <div className="flex flex-col gap-8">
                        <div className="text-[11px] text-[#737373] tracking-widest font-bold">
                            GABARITOL
                        </div>

                        <div className="border border-[#333333] bg-[#141414] p-6 flex flex-col gap-3">
                            <span className="text-[10px] text-[#737373] tracking-widest">
                                PLANO
                            </span>
                            <h2 className="text-xl font-bold text-white tracking-wider">
                                PREMIUM
                            </h2>
                            <span className="text-[10px] text-[#a3a3a3] tracking-widest">
                                1 GABARITO / EXAME
                            </span>

                            <div className="flex items-baseline gap-3 pt-2">
                                <span className="text-3xl md:text-4xl font-bold text-amber-500">
                                    R$28,00
                                </span>
                                <span className="text-xs text-[#737373] line-through">
                                    DE R$60
                                </span>
                                <span className="bg-amber-500 text-black font-bold text-[10px] px-1.5 py-0.5">
                                    -53%
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 text-[11px] text-[#a3a3a3]">
                            <div className="flex gap-2 items-center">
                                <span className="text-[#737373] font-bold">
                                    &gt;
                                </span>
                                <span>1 OTIMIZAÇÃO COM IA</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="text-[#737373] font-bold">
                                    &gt;
                                </span>
                                <span>ANÁLISE DE RESOLUÇÃO COMPLETA</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="text-[#737373] font-bold">
                                    &gt;
                                </span>
                                <span>DOWNLOAD PDF / TXT</span>
                            </div>
                        </div>

                        <div className="border-b border-[#262626] my-2" />

                        <div className="flex flex-col gap-3 text-[11px]">
                            <span className="text-[#737373] text-[10px] tracking-widest">
                                -- POR QUE GABARITOL? --
                            </span>
                            <div className="flex gap-2 items-center text-[#a3a3a3]">
                                <span className="text-[#737373] font-bold">
                                    &gt;
                                </span>
                                <span>
                                    3 AGENTES IA ESPECIALIZADOS ANALISAM SEU
                                    EXAME
                                </span>
                            </div>
                            <div className="flex gap-2 items-center text-[#a3a3a3]">
                                <span className="text-[#737373] font-bold">
                                    &gt;
                                </span>
                                <span>OTIMIZADO EM MINUTOS, NÃO HORAS</span>
                            </div>
                            <div className="flex gap-2 items-center text-[#a3a3a3]">
                                <span className="text-[#737373] font-bold">
                                    &gt;
                                </span>
                                <span>CRÉDITOS NUNCA EXPIRAM</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 pt-12 text-[9px] text-[#525252] tracking-widest">
                        <p>PAGAMENTO 100% SEGURO PROCESSADO VIA ABACATEPAY</p>
                        <p>
                            GABARITOL É UM PRODUTO DA DANILAB LTDA · CNPJ
                            12.345.678/9101-11
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-5 bg-white text-[#171717] p-8 md:p-12 flex flex-col justify-between relative">
                    <Link
                        to="/"
                        className="absolute top-6 right-6 text-[#737373] hover:text-black transition-colors text-base font-bold cursor-pointer"
                        aria-label="Fechar"
                    >
                        X
                    </Link>

                    <div className="flex flex-col gap-8 pt-4">
                        <div className="border border-dashed border-[#a3a3a3] p-5 flex flex-col gap-4 bg-[#fafafa]">
                            <p className="text-[11px] leading-relaxed text-[#262626] font-mono">
                                &quot;EU LITERALLMENTE SÓ CONSEGUI PASSAR EM
                                GENETICA RESOLVENDO TODO DIA A MINHA LISTA DE
                                EXAMES DO GABARITOL.&quot;
                            </p>
                            <div className="flex flex-col text-[9px] text-[#737373]">
                                <span className="font-bold text-[#171717]">
                                    Vini F.
                                </span>
                                <span>ESTUDANTE DE BIOLOGIA</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] text-[#737373] tracking-widest font-bold">
                                FORMA DE PAGAMENTO
                            </span>

                            <div className="flex flex-col gap-2">
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod("PIX")}
                                    className={`p-4 border text-left transition-all cursor-pointer flex flex-col gap-0.5 ${
                                        paymentMethod === "PIX"
                                            ? "border-black bg-[#f5f5f5]"
                                            : "border-[#e5e5e5] hover:border-[#a3a3a3] bg-white"
                                    }`}
                                >
                                    <span className="font-bold text-xs text-[#171717]">
                                        [{paymentMethod === "PIX" ? "X" : " "}]
                                        PIX
                                    </span>
                                    <span className="text-[9px] text-[#737373] tracking-widest pl-5">
                                        APROVAÇÃO INSTANTÂNEA
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setPaymentMethod("CREDIT_CARD")
                                    }
                                    className={`p-4 border text-left transition-all cursor-pointer flex flex-col gap-0.5 ${
                                        paymentMethod === "CREDIT_CARD"
                                            ? "border-black bg-[#f5f5f5]"
                                            : "border-[#e5e5e5] hover:border-[#a3a3a3] bg-white"
                                    }`}
                                >
                                    <span className="font-bold text-xs text-[#171717]">
                                        [
                                        {paymentMethod === "CREDIT_CARD"
                                            ? "X"
                                            : " "}
                                        ] CARTÃO DE CRÉDITO
                                    </span>
                                    <span className="text-[9px] text-[#737373] tracking-widest pl-5">
                                        CHECKOUT SEGURO ABACATEPAY
                                    </span>
                                </button>
                            </div>

                            <div className="flex flex-col gap-1.5 pt-2">
                                <label className="text-[10px] text-[#737373] tracking-widest font-bold">
                                    CPF
                                </label>
                                <input
                                    type="text"
                                    value={cpf}
                                    onChange={handleCpfChange}
                                    placeholder="000.000.000-00"
                                    className="border border-[#e5e5e5] focus:border-black bg-white text-xs font-mono p-3.5 outline-none transition-colors w-full text-[#171717] placeholder-[#a3a3a3]"
                                />
                            </div>

                            <button
                                type="button"
                                className="bg-[#262626] hover:bg-black text-white font-bold text-xs p-4 tracking-widest transition-colors cursor-pointer w-full text-center mt-2"
                            >
                                &gt; PAGAR R$28,00 VIA{" "}
                                {paymentMethod === "PIX" ? "PIX" : "CARTÃO"}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 pt-8 text-[10px] text-[#737373]">
                        <div className="flex items-center gap-2">
                            <span className="text-emerald-600 font-bold">
                                ✓
                            </span>
                            <span>APROVAÇÃO INSTANTÂNEA</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-emerald-600 font-bold">
                                ✓
                            </span>
                            <span>CRÉDITOS NUNCA EXPIRAM</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-emerald-600 font-bold">
                                ✓
                            </span>
                            <span>SUPORTE EM 24H</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
