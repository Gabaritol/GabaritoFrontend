import { useState } from "react";

interface JobCard {
    id: string;
    title: string;
    badge: string;
    date: string;
    tags?: string[];
    score?: number;
    statusText: string;
    isProcessing?: boolean;
}

const MOCK_JOBS: JobCard[] = [
    {
        id: "1",
        title: "NO ACONSELHAMENTO GENÉTICO DE CASAIS COM INFERTILIDADE CONJUGAL — MICRODELEÇÕES AZFC E ICSI",
        badge: "PROCESSANDO...",
        date: "23 JUL 26",
        statusText: "GERANDO QUESTÕES...",
        isProcessing: true,
    },
    {
        id: "2",
        title: "PROVA DE MATEMÁTICA — ÁLGEBRA LINEAR E GEOMETRIA ANALÍTICA",
        badge: "RESPONDER",
        date: "21 JUL 26",
        tags: ["GEOMETRIA", "ALGEBRA"],
        score: 5,
        statusText: "AGUARDANDO SOLUÇÃO",
    },
    {
        id: "3",
        title: "SIMULADO ENEM — FÍSICA E QUÍMICA ORGÂNICA APLICADA",
        badge: "CONCLUIDO",
        date: "21 JUL 26",
        tags: ["FÍSICA", "QUÍMICA", "ENEM"],
        score: 10,
        statusText: "GABARITO CONCLUIDO",
    },
];

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState<
        "TODOS" | "CONCLUIDO" | "RESPONDER"
    >("TODOS");
    const [activeNav, setActiveNav] = useState("HOME");
    const [copied, setCopied] = useState(false);
    const referralLink = "https://curricu.lol/ref/26664605-d3";

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const heatmapCols = 32;
    const heatmapRows = 3;

    return (
        <div className="min-h-screen bg-[#141414] text-[#e5e5e5] font-mono text-xs selection:bg-amber-500 selection:text-black flex flex-col uppercase tracking-wider">
            <header className="border-b border-[#262626] bg-[#141414] px-6 py-4 flex justify-between items-center text-[11px] tracking-widest">
                <nav className="flex items-center gap-8">
                    {[
                        "HOME",
                        "GESTOR DE APLICAÇÕES",
                        "BUSCAR VAGAS",
                        "AFILIAÇÃO",
                    ].map((item) => (
                        <button
                            key={item}
                            onClick={() => setActiveNav(item)}
                            className={`pb-1 transition-colors relative cursor-pointer ${
                                activeNav === item
                                    ? "text-white font-bold border-b-2 border-amber-500"
                                    : "text-[#737373] hover:text-[#a3a3a3]"
                            }`}
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-6 text-[#737373]">
                    <span className="border border-[#333] text-amber-500 px-1.5 py-0.5 text-[9px] font-bold">
                        [BETA]
                    </span>
                    <button className="hover:text-white transition-colors cursor-pointer">
                        &gt; SUPORTE
                    </button>
                    <button className="hover:text-white transition-colors cursor-pointer">
                        &gt; CONFIG
                    </button>
                </div>
            </header>

            <main className="flex-1 max-w-[1600px] w-full mx-auto p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <section className="lg:col-span-8 flex flex-col gap-6">
                    <div className="border border-[#262626] bg-[#1a1a1a]/40 p-4 flex flex-col gap-3">
                        <div className="text-[10px] text-[#737373] tracking-widest">
                            FLT A-001 · STATUS{" "}
                            <span className="text-amber-500 font-bold">
                                PENDING
                            </span>{" "}
                            · PEND 03 · AVG — · CRED 00
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <div className="md:col-span-7 border border-[#333] hover:border-amber-500/50 bg-[#171717] p-4 flex items-center justify-between cursor-pointer group transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="border border-amber-500/40 text-amber-500 px-3 py-2 font-bold group-hover:bg-amber-500 group-hover:text-black transition-colors">
                                        ↵ ENTER
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="font-bold text-white text-xs group-hover:text-amber-500 transition-colors">
                                            ANALISAR NOVA VAGA
                                        </span>
                                        <span className="text-[9px] text-[#737373] max-w-[240px]">
                                            3 ANÁLISES AGUARDANDO — CLIQUE NO
                                            CARD PARA OTIMIZAR
                                        </span>
                                    </div>
                                </div>
                                <span className="text-amber-500 font-bold text-base group-hover:translate-x-1 transition-transform">
                                    →
                                </span>
                            </div>

                            <div className="md:col-span-5 border border-[#262626] hover:border-[#404040] bg-[#171717] p-4 flex items-center justify-between cursor-pointer group transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="border border-[#333] text-[#737373] px-3.5 py-2 font-bold group-hover:text-white">
                                        GL
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="font-bold text-white text-xs">
                                            GERAR EXAME
                                        </span>
                                        <span className="text-[9px] text-[#737373] max-w-[180px]">
                                            GERE EXAMES A PARTIR DO SEU
                                            HISTÓRICO
                                        </span>
                                    </div>
                                </div>
                                <span className="text-[#525252] group-hover:text-white group-hover:translate-x-1 transition-all">
                                    →
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 border-b border-[#262626] pb-2 pt-2">
                        {(["TODOS", "CONCLUIDO", "RESPONDER"] as const).map(
                            (tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`text-[11px] font-bold tracking-widest cursor-pointer transition-colors relative ${
                                        activeTab === tab
                                            ? "text-white"
                                            : "text-[#737373] hover:text-[#a3a3a3]"
                                    }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <div className="absolute -bottom-[9px] left-0 right-0 h-[2px] bg-amber-500" />
                                    )}
                                </button>
                            ),
                        )}
                    </div>

                    <div className="flex flex-col gap-4">
                        {MOCK_JOBS.map((job) => (
                            <div
                                key={job.id}
                                className="border border-[#262626] bg-[#1a1a1a]/30 p-5 hover:border-[#333] transition-all flex justify-between items-start group"
                            >
                                <div className="flex flex-col gap-3 max-w-[85%]">
                                    <h3 className="font-bold text-white text-xs leading-relaxed tracking-wider break-all">
                                        {job.title}
                                    </h3>

                                    <div className="flex items-center gap-3 text-[10px] text-[#737373]">
                                        <span
                                            className={`px-2 py-0.5 border font-bold text-[9px] ${
                                                job.isProcessing
                                                    ? "border-amber-500/40 text-amber-500 bg-amber-500/5"
                                                    : "border-[#333] text-[#a3a3a3] bg-[#1a1a1a]"
                                            }`}
                                        >
                                            {job.badge}
                                        </span>
                                        <span>·</span>
                                        <span>{job.date}</span>
                                    </div>

                                    {job.tags && (
                                        <div className="text-[10px] text-[#737373] tracking-widest font-mono">
                                            {job.tags.join(" · ")}
                                        </div>
                                    )}

                                    {job.score !== undefined && (
                                        <div className="flex items-center gap-2 text-[10px]">
                                            <span className="font-bold text-white">
                                                {job.score}
                                            </span>
                                            <span className="text-amber-500">
                                                ●
                                            </span>
                                            <span className="text-amber-500 font-bold tracking-widest">
                                                {job.statusText}
                                            </span>
                                        </div>
                                    )}

                                    {job.isProcessing && (
                                        <div className="text-amber-500 font-bold text-[10px] tracking-widest animate-pulse">
                                            {job.statusText}
                                        </div>
                                    )}
                                </div>

                                <button className="text-[#525252] hover:text-white p-1 transition-colors cursor-pointer">
                                    ⋮
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <aside className="lg:col-span-4 flex flex-col gap-6">
                    <div className="border border-[#262626] bg-[#1a1a1a]/30 p-6 grid grid-cols-3 gap-2 text-center">
                        <div className="flex flex-col gap-1 items-center justify-center">
                            <span className="text-2xl font-bold text-amber-500 leading-none">
                                0
                            </span>
                            <span className="text-[9px] text-[#737373] tracking-widest">
                                CRÉDITOS
                            </span>
                            <button className="mt-1 text-[9px] font-bold text-amber-500 hover:underline cursor-pointer">
                                COMPRAR
                            </button>
                        </div>

                        <div className="flex flex-col gap-1 items-center justify-center border-x border-[#262626]">
                            <span className="text-2xl font-bold text-white leading-none">
                                0
                            </span>
                            <span className="text-[9px] text-[#737373] tracking-widest">
                                OTIMIZAÇÕES
                            </span>
                        </div>

                        <div className="flex flex-col gap-1 items-center justify-center">
                            <span className="text-2xl font-bold text-white leading-none">
                                1
                            </span>
                            <span className="text-[9px] text-[#737373] tracking-widest">
                                CVS GERADOS
                            </span>
                        </div>
                    </div>

                    <div className="border border-[#262626] bg-[#1a1a1a]/30 p-5 flex flex-col gap-4">
                        <span className="text-[10px] text-[#737373] tracking-widest font-bold">
                            ATIVIDADE
                        </span>

                        <div className="flex flex-col gap-1 overflow-x-auto pb-1">
                            {Array.from({ length: heatmapRows }).map(
                                (_, rIndex) => (
                                    <div key={rIndex} className="flex gap-1">
                                        {Array.from({
                                            length: heatmapCols,
                                        }).map((_, cIndex) => {
                                            const isHighlighted =
                                                (rIndex === 1 &&
                                                    cIndex === 8) ||
                                                (rIndex === 2 &&
                                                    cIndex === 6) ||
                                                (rIndex === 0 && cIndex === 18);
                                            const isSemiHighlighted =
                                                rIndex === 1 && cIndex === 7;

                                            return (
                                                <div
                                                    key={cIndex}
                                                    className={`w-2.5 h-2.5 rounded-[1px] ${
                                                        isHighlighted
                                                            ? "bg-amber-500"
                                                            : isSemiHighlighted
                                                              ? "bg-amber-900/60"
                                                              : "bg-[#262626]"
                                                    }`}
                                                />
                                            );
                                        })}
                                    </div>
                                ),
                            )}
                        </div>

                        <div className="text-[9px] text-[#737373] tracking-widest">
                            3 DIAS ATIVOS | 5 AÇÕES | SEQ: 1D
                        </div>
                    </div>

                    <div className="border border-[#262626] bg-[#1a1a1a]/20 p-8 text-center min-h-[120px] flex items-center justify-center">
                        <p className="text-[10px] text-[#737373] leading-relaxed tracking-widest max-w-[240px]">
                            OTIMIZE SEU PRIMEIRO CURRÍCULO PARA COMEÇAR A
                            ACUMULAR PONTOS
                        </p>
                    </div>

                    <div className="border border-[#262626] bg-[#1a1a1a]/30 p-6 flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-[10px] text-[#a3a3a3] font-bold tracking-widest">
                            <span className="text-amber-500">░</span> INDICAÇÃO
                        </div>

                        <p className="text-[10px] text-[#737373] leading-relaxed tracking-wider">
                            INDIQUE O APP PARA UM AMIGO. SE ELE FIZER UMA
                            COMPRA, VOCÊ GANHA DE 1 A 25 CRÉDITOS.
                        </p>

                        <div className="flex items-center gap-0 border border-[#262626] bg-[#141414]">
                            <input
                                type="text"
                                readOnly
                                value={referralLink}
                                className="bg-transparent text-[10px] text-[#a3a3a3] px-3 py-2.5 w-full focus:outline-none font-mono lowercase truncate"
                            />
                            <button
                                onClick={handleCopy}
                                className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-[10px] px-4 py-2.5 tracking-widest transition-colors cursor-pointer shrink-0"
                            >
                                {copied ? "COPIADO!" : "> COPIAR"}
                            </button>
                        </div>

                        <button className="border border-[#262626] hover:border-[#333] bg-[#141414] text-[#a3a3a3] hover:text-white py-2.5 px-4 text-[10px] font-bold tracking-widest text-left transition-colors cursor-pointer w-fit">
                            &gt; ENCURTAR LINK
                        </button>
                    </div>
                </aside>
            </main>
        </div>
    );
}
