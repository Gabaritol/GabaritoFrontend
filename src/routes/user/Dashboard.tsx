import { useMemo, useState } from "react";
import Affiliation from "../../components/dashboard/Affiliation";
import { Link } from "@tanstack/react-router";

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

const INITIAL_JOBS: JobCard[] = [
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
    {
        id: "4",
        title: "AVALIAÇÃO DE PORTUGUÊS — INTERPRETAÇÃO E SINTAXE",
        badge: "CONCLUIDO",
        date: "18 JUL 26",
        tags: ["PORTUGUÊS", "SINTAXE", "GRAMÁTICA"],
        score: 10,
        statusText: "GABARITO CONCLUIDO",
    },
];

export default function Dashboard() {
    const [jobs, setJobs] = useState<JobCard[]>(INITIAL_JOBS);
    const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

    const [activeTab, setActiveTab] = useState<
        "TODOS" | "CONCLUIDO" | "RESPONDER"
    >("TODOS");
    const [activeNav, setActiveNav] = useState<"HOME" | "AFILIAÇÃO">("HOME");
    const [copied, setCopied] = useState(false);
    const referralLink = "A2CD5";

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDeleteExam = (id: string) => {
        setJobs((prev) => prev.filter((job) => job.id !== id));
        setConfirmDeleteId(null);
    };

    const heatmapCols = 32;
    const heatmapRows = 3;

    const filteredJobs = useMemo(() => {
        if (activeTab === "TODOS") return jobs;
        return jobs.filter((job) => job.badge === activeTab);
    }, [activeTab, jobs]);

    const activityStats = useMemo(() => {
        const totalActions = jobs.length;
        const activeDatesSet = new Set(jobs.map((j) => j.date));
        const activeDaysCount = activeDatesSet.size;

        const gridCells = Array.from({ length: heatmapRows * heatmapCols }).map(
            (_, index) => {
                if (index === 95 && activeDatesSet.has("23 JUL 26")) {
                    return { active: true, intensity: "high" };
                }
                if (index === 93 && activeDatesSet.has("21 JUL 26")) {
                    return { active: true, intensity: "high" };
                }
                if (index === 90 && activeDatesSet.has("18 JUL 26")) {
                    return { active: true, intensity: "high" };
                }
                return { active: false, intensity: "none" };
            },
        );

        return {
            totalActions,
            activeDaysCount,
            streakDays: 1,
            gridCells,
        };
    }, [jobs]);

    return (
        <div className="DepartureMono min-h-screen bg-[#141414] text-[#e5e5e5] font-mono text-xs selection:bg-amber-500 selection:text-black flex flex-col uppercase tracking-wider">
            <header className="border-b border-[#262626] bg-[#141414] px-6 py-4 flex justify-between items-center text-[11px] tracking-widest">
                <nav className="flex items-center gap-8">
                    {(["HOME", "AFILIAÇÃO"] as const).map((item) => (
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
                    <a
                        href="mailto:teampotatopix@gmai.com"
                        className="hover:text-white transition-colors cursor-pointer"
                    >
                        &gt; SUPORTE
                    </a>
                    <Link
                        to="/config"
                        className="hover:text-white transition-colors cursor-pointer"
                    >
                        &gt; CONFIG
                    </Link>
                </div>
            </header>

            {activeNav === "AFILIAÇÃO" ? (
                <main className="flex-1 max-w-[1600px] w-full mx-auto p-6 md:p-8 flex items-center justify-center">
                    <Affiliation />
                </main>
            ) : (
                <main className="flex-1 max-w-[1600px] w-full mx-auto p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <section className="lg:col-span-8 flex flex-col gap-6">
                        <div className="border border-[#262626] bg-[#1a1a1a]/40 p-4 flex flex-col gap-3">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                                <Link
                                    to="/gl/generate"
                                    className="md:col-span-7 border border-[#333] hover:border-amber-500/50 bg-[#171717] p-4 flex items-center justify-between cursor-pointer group transition-all"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="border border-amber-500/40 text-amber-500 px-3 py-2 font-bold group-hover:bg-amber-500 group-hover:text-black transition-colors">
                                            ↵ ENTER
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="font-bold text-white text-xs group-hover:text-amber-500 transition-colors">
                                                CRIAR NOVO GABARITO
                                            </span>
                                            <span className="text-[9px] text-[#737373] max-w-[240px]">
                                                1 AGUARDANDO RESPOSTA — CLIQUE
                                                NOS CARDS RESPONDER
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-amber-500 font-bold text-base group-hover:translate-x-1 transition-transform">
                                        →
                                    </span>
                                </Link>

                                <a
                                    href="/#plans"
                                    className="md:col-span-5 border border-[#262626] hover:border-[#404040] bg-[#171717] p-4 flex items-center justify-between cursor-pointer group transition-all"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="border border-[#333] text-[#737373] px-3.5 py-2 font-bold group-hover:text-white">
                                            GL
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="font-bold text-white text-xs">
                                                ADICIONAR CREDITOS
                                            </span>
                                            <span className="text-[9px] text-[#737373] max-w-[180px]">
                                                ADICIONE CREDITOS GERE EXAMES A
                                                PARTIR DO SEU HISTÓRICO
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-[#525252] group-hover:text-white group-hover:translate-x-1 transition-all">
                                        →
                                    </span>
                                </a>
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
                            {filteredJobs.length === 0 ? (
                                <div className="border border-[#262626] bg-[#1a1a1a]/20 p-8 text-center text-[#737373] text-[10px]">
                                    NENHUM EXAME ENCONTRADO
                                </div>
                            ) : (
                                filteredJobs.map((job) => (
                                    <div
                                        key={job.id}
                                        className="border border-[#262626] bg-[#1a1a1a]/30 p-5 hover:border-[#333] transition-all flex justify-between items-start group gap-4"
                                    >
                                        <div className="flex flex-col gap-3 max-w-[75%]">
                                            <Link
                                                to="/gl/exam"
                                                className="font-bold text-white text-xs leading-relaxed tracking-wider break-all"
                                            >
                                                {job.title}
                                            </Link>

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

                                        <div className="shrink-0 flex items-center">
                                            {confirmDeleteId === job.id ? (
                                                <div className="bg-red-950/40 border border-red-500/60 p-2 flex items-center gap-2 text-[10px]">
                                                    <span className="text-red-400 font-bold tracking-widest hidden sm:inline">
                                                        EXCLUIR?
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            handleDeleteExam(
                                                                job.id,
                                                            )
                                                        }
                                                        className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1 transition-colors cursor-pointer tracking-widest"
                                                    >
                                                        DELETAR
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setConfirmDeleteId(
                                                                null,
                                                            )
                                                        }
                                                        className="text-[#737373] hover:text-white px-1.5 py-1 font-bold transition-colors cursor-pointer"
                                                        title="Cancelar"
                                                    >
                                                        [X]
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        setConfirmDeleteId(
                                                            job.id,
                                                        )
                                                    }
                                                    className="text-[#525252] hover:text-red-400 p-1 transition-colors cursor-pointer text-sm font-bold"
                                                    title="Opções de exclusão"
                                                >
                                                    ⋮
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
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
                                    {activityStats.totalActions}
                                </span>
                                <span className="text-[9px] text-[#737373] tracking-widest">
                                    GABARITOS GERADOS
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
                                        <div
                                            key={rIndex}
                                            className="flex gap-1"
                                        >
                                            {Array.from({
                                                length: heatmapCols,
                                            }).map((_, cIndex) => {
                                                const cellIndex =
                                                    rIndex * heatmapCols +
                                                    cIndex;
                                                const cell =
                                                    activityStats.gridCells[
                                                        cellIndex
                                                    ];

                                                return (
                                                    <div
                                                        key={cIndex}
                                                        className={`w-2.5 h-2.5 rounded-[1px] transition-colors ${
                                                            cell?.active
                                                                ? cell.intensity ===
                                                                  "high"
                                                                    ? "bg-amber-500"
                                                                    : "bg-amber-900/60"
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
                                {activityStats.activeDaysCount} DIAS ATIVOS |{" "}
                                {activityStats.totalActions} AÇÕES | SEQ:{" "}
                                {activityStats.streakDays}D
                            </div>
                        </div>

                        <div className="border border-[#262626] bg-[#1a1a1a]/20 p-8 text-center min-h-[120px] flex items-center justify-center">
                            <p className="text-[10px] text-[#737373] leading-relaxed tracking-widest max-w-[240px]">
                                SOLUCIONE SEU PRIMEIRO GABARITO PARA COMEÇAR A
                                ACUMULAR PONTOS
                            </p>
                        </div>

                        <div className="border border-[#262626] bg-[#1a1a1a]/30 p-6 flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-[10px] text-[#a3a3a3] font-bold tracking-widest">
                                <span className="text-amber-500">░</span>{" "}
                                INDICAÇÃO
                            </div>

                            <p className="text-[10px] text-[#737373] leading-relaxed tracking-wider">
                                INDIQUE O APP PARA UM AMIGO. SE ELE UTILIZAR SEU
                                CODIGO, VOCÊ GANHA DE 1 A 25 CRÉDITOS.
                            </p>

                            <div className="flex items-center gap-0 border border-[#262626] bg-[#141414]">
                                <input
                                    type="text"
                                    readOnly
                                    value={referralLink}
                                    className="bg-transparent text-[10px] text-[#a3a3a3] px-3 py-2.5 w-full focus:outline-none font-mono uppercase truncate"
                                />
                                <button
                                    onClick={handleCopy}
                                    className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-[10px] px-4 py-2.5 tracking-widest transition-colors cursor-pointer shrink-0"
                                >
                                    {copied ? "COPIADO!" : "> COPIAR"}
                                </button>
                            </div>
                        </div>
                    </aside>
                </main>
            )}
        </div>
    );
}
