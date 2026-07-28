import { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import GeneratingQuestions from "../../components/generate/GeneratingQuestions";

type ExamState = "idle" | "generating" | "completed";

export interface ExamPayload {
    title: string;
    board: string;
    topic: string;
    difficulty: "EASY" | "MEDIUM" | "HARD";
    educationLevel: "PUBLIC_EXAM" | "HIGH_SCHOOL" | "UNIVERSITY";
    questionCount: number;
}

export default function GenerateExamPage() {
    const [status, setStatus] = useState<ExamState>("idle");
    const navigate = useNavigate();

    const [form, setForm] = useState<ExamPayload>({
        title: "",
        board: "",
        topic: "",
        difficulty: "MEDIUM",
        educationLevel: "PUBLIC_EXAM",
        questionCount: 10,
    });

    const updateForm = <K extends keyof ExamPayload>(
        key: K,
        value: ExamPayload[K],
    ) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const canSubmit =
        form.title.trim().length >= 3 && form.topic.trim().length >= 10;

    useEffect(() => {
        if (status === "completed") {
            navigate({ to: "/gl/exam" });
        }
    }, [status, navigate]);

    const handleStartGeneration = () => {
        if (!canSubmit) return;
        setStatus("generating");
    };

    if (status === "generating") {
        return (
            <GeneratingQuestions onComplete={() => setStatus("completed")} />
        );
    }

    return (
        <div className="min-h-screen bg-[#141414] text-[#e5e5e5] font-mono selection:bg-amber-500 selection:text-black flex flex-col">
            <header className="DepartureMono flex justify-between items-center p-6 border-b border-[#262626] text-xs uppercase tracking-widest text-[#737373]">
                <div className="text-amber-500 font-bold">
                    GABARITOL_GENERATE_v1.0
                </div>
                <Link
                    to="/"
                    className="hover:text-white transition-colors cursor-pointer"
                >
                    [X] CLOSE
                </Link>
            </header>

            <main className="flex-1 max-w-screen-2xl w-full mx-auto p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <section className="lg:col-span-8 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="DepartureMono text-2xl md:text-3xl font-black uppercase text-white tracking-widest">
                            CONFIGURE A SUA PROVA
                        </h1>
                        <div className="flex items-center gap-2 text-[10px] text-[#a3a3a3] uppercase tracking-wider">
                            <span className="text-amber-500">░</span>
                            PREENCHA OS PARÂMETROS PARA A COMPILAÇÃO DO EXAME.
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 bg-[#1a1a1a] border border-[#262626] p-6">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <div className="md:col-span-8 flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase tracking-widest text-[#a3a3a3] font-bold">
                                    TÍTULO DA PROVA / CARGO *
                                </label>
                                <input
                                    type="text"
                                    value={form.title}
                                    onChange={(e) =>
                                        updateForm("title", e.target.value)
                                    }
                                    placeholder="EX: MATEMÁTICA PARA NÍVEL MÉDIO"
                                    className="bg-[#141414] border border-[#262626] text-white p-3 text-xs focus:outline-none focus:border-amber-500/50 uppercase"
                                />
                            </div>

                            <div className="md:col-span-4 flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase tracking-widest text-[#a3a3a3] font-bold">
                                    BANCA (OPCIONAL)
                                </label>
                                <input
                                    type="text"
                                    value={form.board}
                                    onChange={(e) =>
                                        updateForm("board", e.target.value)
                                    }
                                    placeholder="EX: FUNVAPI, CEBRASPE"
                                    className="bg-[#141414] border border-[#262626] text-white p-3 text-xs focus:outline-none focus:border-amber-500/50 uppercase"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] uppercase tracking-widest text-[#a3a3a3] font-bold">
                                ASSUNTOS E CONTEÚDO PROGRAMÁTICO *
                            </label>
                            <textarea
                                value={form.topic}
                                onChange={(e) =>
                                    updateForm("topic", e.target.value)
                                }
                                placeholder="EX: REGRA DE TRÊS SIMPLES E COMPOSTA, PORCENTAGEM, JUROS SIMPLES E COMPOSTOS..."
                                className="w-full h-32 bg-[#141414] border border-[#262626] text-[#e5e5e5] placeholder:text-[#525252] p-4 focus:outline-none focus:border-amber-500/50 transition-colors resize-none text-xs leading-relaxed uppercase"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-[#262626]">
                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] uppercase tracking-widest text-[#a3a3a3] font-bold">
                                    NÍVEL DE ENSINO
                                </span>
                                <div className="flex flex-col gap-1.5">
                                    {[
                                        {
                                            id: "PUBLIC_EXAM",
                                            label: "CONCURSO PÚBLICO",
                                        },
                                        {
                                            id: "HIGH_SCHOOL",
                                            label: "ENSINO MÉDIO / ENEM",
                                        },
                                        {
                                            id: "UNIVERSITY",
                                            label: "ENSINO SUPERIOR",
                                        },
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() =>
                                                updateForm(
                                                    "educationLevel",
                                                    item.id as ExamPayload["educationLevel"],
                                                )
                                            }
                                            className={`text-[10px] p-2 text-left border transition-all cursor-pointer font-bold ${
                                                form.educationLevel === item.id
                                                    ? "border-amber-500 bg-amber-500/10 text-amber-500"
                                                    : "border-[#262626] bg-[#141414] text-[#737373] hover:text-white"
                                            }`}
                                        >
                                            {form.educationLevel === item.id
                                                ? "► "
                                                : "  "}
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] uppercase tracking-widest text-[#a3a3a3] font-bold">
                                    DIFICULDADE
                                </span>
                                <div className="flex flex-col gap-1.5">
                                    {[
                                        { id: "EASY", label: "FÁCIL" },
                                        { id: "MEDIUM", label: "MÉDIA" },
                                        { id: "HARD", label: "DIFÍCIL" },
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() =>
                                                updateForm(
                                                    "difficulty",
                                                    item.id as ExamPayload["difficulty"],
                                                )
                                            }
                                            className={`text-[10px] p-2 text-left border transition-all cursor-pointer font-bold ${
                                                form.difficulty === item.id
                                                    ? "border-amber-500 bg-amber-500/10 text-amber-500"
                                                    : "border-[#262626] bg-[#141414] text-[#737373] hover:text-white"
                                            }`}
                                        >
                                            {form.difficulty === item.id
                                                ? "► "
                                                : "  "}
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] uppercase tracking-widest text-[#a3a3a3] font-bold">
                                    QTD. DE QUESTÕES
                                </span>
                                <div className="grid grid-cols-2 gap-1.5">
                                    {[5, 10, 15, 20].map((count) => (
                                        <button
                                            key={count}
                                            type="button"
                                            onClick={() =>
                                                updateForm(
                                                    "questionCount",
                                                    count,
                                                )
                                            }
                                            className={`text-[10px] p-2 text-center border transition-all cursor-pointer font-bold ${
                                                form.questionCount === count
                                                    ? "border-amber-500 bg-amber-500/10 text-amber-500"
                                                    : "border-[#262626] bg-[#141414] text-[#737373] hover:text-white"
                                            }`}
                                        >
                                            {count} QUESTÕES
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleStartGeneration}
                        disabled={!canSubmit}
                        className={`cursor-pointer py-5 px-4 border text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-sm ${
                            canSubmit
                                ? "border-amber-500 bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-black"
                                : "border-[#262626] bg-[#1a1a1a] text-[#525252] cursor-not-allowed"
                        }`}
                    >
                        {canSubmit
                            ? "INICIAR GERAÇÃO DA PROVA ➔"
                            : "PREENCHA O TÍTULO E OS TÓPICOS..."}
                    </button>
                </section>

                <aside className="lg:col-span-4 flex flex-col gap-6">
                    <div className="border border-[#262626] p-6 bg-[#1a1a1a]/50">
                        <div className="flex justify-between items-center border-b border-[#262626] pb-4 mb-4 text-[10px] uppercase tracking-widest font-bold">
                            <span className="text-amber-500 flex items-center gap-2">
                                <span>■</span> PAYLOAD PREVIEW
                            </span>
                            <span className="text-amber-500 font-mono text-[9px]">
                                JSON
                            </span>
                        </div>

                        <pre className="bg-[#141414] border border-[#262626] p-4 text-[10px] font-mono text-amber-500/80 overflow-x-auto leading-relaxed">
                            {JSON.stringify(form, null, 2)}
                        </pre>
                    </div>

                    <div className="border border-[#262626] border-dashed p-6 bg-[#141414]">
                        <div className="border-b border-[#262626] border-dashed pb-4 mb-4 text-[10px] uppercase tracking-widest font-bold text-[#a3a3a3]">
                            ░ DICAS DE GERAMENTO
                        </div>

                        <ul className="flex flex-col gap-3 text-[10px] uppercase tracking-wider text-[#737373]">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500 mt-0.5">
                                    &gt;
                                </span>
                                Quanto mais detalhados forem os tópicos, mais
                                precisas serão as questões.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500 mt-0.5">
                                    &gt;
                                </span>
                                Você pode especificar leis ou artigos no campo
                                de tópicos.
                            </li>
                        </ul>
                    </div>
                </aside>
            </main>
        </div>
    );
}
