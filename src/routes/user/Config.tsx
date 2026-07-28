import { useState } from "react";
import { Link } from "@tanstack/react-router";

type ConfigTab =
    | "CONTA"
    | "PRIVACIDADE"
    | "ÁUDIO"
    | "SUPORTE"
    | "SEUS_DIREITOS";

export default function Configuration() {
    const [activeTab, setActiveTab] = useState<ConfigTab>("SEUS_DIREITOS");

    return (
        <div className="DepartureMono min-h-screen bg-[#141414] text-[#e5e5e5] font-mono text-xs selection:bg-amber-500 selection:text-black flex flex-col uppercase tracking-wider p-4 md:p-8">
            <header className="w-full max-w-5xl mx-auto flex justify-between items-center mb-8 pb-4 border-b border-[#262626] text-[#737373] text-[11px] tracking-widest">
                <span className="text-white font-bold text-sm">
                    GABARITOL_GENERATE_v1.0
                </span>
                <Link
                    to="/"
                    className="hover:text-white transition-colors cursor-pointer font-bold"
                >
                    [X] CLOSE
                </Link>
            </header>

            <main className="w-full max-w-5xl mx-auto flex flex-col gap-6 flex-1">
                <div className="border border-amber-500/60 bg-[#171717] p-6 flex flex-col gap-4 relative">
                    <div className="flex justify-between items-center text-[10px]">
                        <span className="text-[#737373] tracking-widest flex items-center gap-1">
                            <span className="text-amber-500">░</span> DEPOIMENTO
                            RÁPIDO
                        </span>
                        <span className="bg-amber-500 text-black font-bold px-2 py-0.5 text-[9px] tracking-widest">
                            *****
                        </span>
                    </div>

                    <h3 className="text-sm font-bold text-white tracking-widest">
                        CONTA PRA GALERA O QUE ACHOU DO GABARITOL
                    </h3>

                    <p className="text-[10px] text-[#a3a3a3] leading-relaxed max-w-2xl">
                        DEIXE UMA AVALIAÇÃO DE 1 A 5 ESTRELAS. DEPOIMENTOS
                        APROVADOS APARECEM NA NOSSA LANDING — SEM EMAIL, SEM
                        NOME, SÓ A SUA NOTA E SUA HISTÓRIA.
                    </p>

                    <div>
                        <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-[10px] px-5 py-2.5 tracking-widest transition-colors cursor-pointer">
                            &gt; EM DESENVOLVIMENTO...
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-2">
                    <aside className="md:col-span-4 border border-[#262626] bg-[#171717] p-4 flex flex-col justify-between">
                        <div className="flex flex-col gap-1">
                            <div className="text-[10px] text-[#737373] tracking-widest pb-3 mb-2 border-b border-[#262626]">
                                -- MENU --
                            </div>

                            <nav className="flex flex-col gap-1 text-[10px]">
                                {[
                                    { id: "CONTA", label: "CONTA" },
                                    { id: "PRIVACIDADE", label: "PRIVACIDADE" },
                                    { id: "ÁUDIO", label: "ÁUDIO" },
                                    { id: "SUPORTE", label: "SUPORTE" },
                                    {
                                        id: "SEUS_DIREITOS",
                                        label: "SEUS DIREITOS",
                                    },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() =>
                                            setActiveTab(item.id as ConfigTab)
                                        }
                                        className={`text-left p-2.5 transition-all cursor-pointer ${
                                            activeTab === item.id
                                                ? "border border-amber-500 text-amber-500 font-bold bg-amber-500/5"
                                                : "text-[#a3a3a3] hover:text-white hover:bg-[#202020]"
                                        }`}
                                    >
                                        {activeTab === item.id
                                            ? `> ${item.label}`
                                            : item.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="pt-4 mt-6 border-t border-[#262626]">
                            <button className="w-full text-left p-2.5 text-[10px] text-[#737373] hover:text-red-400 transition-colors cursor-pointer">
                                &gt; SAIR DA CONTA
                            </button>
                        </div>
                    </aside>

                    <section className="md:col-span-8 border border-[#262626] bg-[#171717] p-6 min-h-[220px]">
                        {activeTab === "SEUS_DIREITOS" && (
                            <div className="flex flex-col gap-6">
                                <h4 className="text-amber-500 font-bold text-xs tracking-widest">
                                    -- SEUS DIREITOS --
                                </h4>

                                <p className="text-[10px] text-[#a3a3a3] leading-relaxed tracking-wider">
                                    Conforme a Lei Geral de Proteção de Dados
                                    (Lei 13.709/2018), você tem direito a
                                    acessar, corrigir, exportar ou solicitar a
                                    exclusão dos seus dados pessoais.
                                </p>

                                <div>
                                    <button className="w-full border border-amber-500/60 bg-[#141414] hover:bg-red-500/10 hover:border-red-500 hover:text-red-400 text-amber-500 font-bold text-[10px] py-3 px-4 transition-all cursor-pointer text-center tracking-widest">
                                        &gt; EXCUIR MINHA CONTA E TODOS OS DADOS
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === "CONTA" && (
                            <div className="flex flex-col gap-4">
                                <h4 className="text-amber-500 font-bold text-xs tracking-widest">
                                    -- DETALHES DA CONTA --
                                </h4>
                                <p className="text-[10px] text-[#737373]">
                                    GERENCIE SEUS DADOS DE ACESSO E PLANO ATIVO.
                                </p>
                            </div>
                        )}

                        {activeTab !== "SEUS_DIREITOS" &&
                            activeTab !== "CONTA" && (
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-amber-500 font-bold text-xs tracking-widest">
                                        -- {activeTab.replace("_", " ")} --
                                    </h4>
                                    <p className="text-[10px] text-[#737373]">
                                        CONFIGURAÇÕES EM DESENVOLVIMENTO.
                                    </p>
                                </div>
                            )}
                    </section>
                </div>
            </main>
        </div>
    );
}
