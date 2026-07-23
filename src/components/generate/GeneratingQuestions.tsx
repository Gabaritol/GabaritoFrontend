import { useEffect, useState } from "react";

interface GeneratingQuestionsProps {
    onComplete: () => void;
}

const GENERATION_STEPS = [
    "ANALISANDO PROMPT E CONTEXTO ENVIADO...",
    "EXTRAINDO BANCA, CARGO E NIVEL DE DIFICULDADE...",
    "CONSULTANDO BASE DE CONHECIMENTO E QUESTÕES...",
    "ELABORANDO ENUNCIADOS E ALTERNATIVAS...",
    "MAPPING GABARITO E EXPLICAÇÕES TÉCNICAS...",
    "FINALIZANDO FORMATAÇÃO JSON DA PROVA...",
];

export default function GeneratingQuestions({
    onComplete,
}: GeneratingQuestionsProps) {
    const [progress, setProgress] = useState(0);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 400);
                    return 100;
                }
                return prev + 2;
            });
        }, 80);

        return () => clearInterval(interval);
    }, [onComplete]);

    useEffect(() => {
        const stepInterval = setInterval(() => {
            setCurrentStepIndex((prev) => (prev + 1) % GENERATION_STEPS.length);
        }, 1200);

        return () => clearInterval(stepInterval);
    }, []);

    return (
        <div className="min-h-screen bg-[#141414] text-[#e5e5e5] font-mono p-8 flex flex-col items-center justify-center selection:bg-amber-500 selection:text-black">
            <div className="w-full max-w-2xl bg-[#1a1a1a] border border-[#262626] p-8 shadow-2xl relative">
                <div className="text-[10px] text-[#737373] uppercase tracking-widest mb-6 pb-2 border-b border-[#262626] flex justify-between items-center">
                    <span>■ MOTOR DE IA · GABARITOL ENGINE v1.0</span>
                    <span className="text-amber-500 animate-pulse">
                        ● PROCESSANDO
                    </span>
                </div>

                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="DepartureMono text-xl font-bold uppercase text-white tracking-widest mb-1">
                            GERANDO SUAS QUESTÕES
                        </h2>
                        <p className="text-xs text-[#a3a3a3] uppercase tracking-wider IbmPlexMono">
                            AGUARDE ENQUANTO COMPILAMOS E VALIDAMOS O GABARITO.
                        </p>
                    </div>

                    <div className="w-full bg-[#141414] border border-[#262626] p-1">
                        <div
                            className="bg-amber-500 h-3 transition-all duration-150 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="flex justify-between items-center text-xs uppercase tracking-widest text-[#737373]">
                        <span>PROGRESSO</span>
                        <span className="text-amber-500 font-bold">
                            {progress}%
                        </span>
                    </div>

                    <div className="bg-[#141414] border border-[#262626] p-4 text-xs font-mono text-[#a3a3a3] flex flex-col gap-2 min-h-[100px] justify-center">
                        <div className="text-amber-500 flex items-center gap-2">
                            <span>&gt;</span>
                            <span>{GENERATION_STEPS[currentStepIndex]}</span>
                        </div>
                        <div className="text-[#525252] text-[10px]">
                            ↳ ENGINE ID: GBR-AI-{Math.floor(progress * 1234)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
