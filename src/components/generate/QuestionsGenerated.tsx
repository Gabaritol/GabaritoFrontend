import { useState } from "react";

export interface Option {
    label: string;
    text: string;
    correct: boolean;
}

export interface Question {
    id: string;
    statement: string;
    type: string;
    options: Option[];
    explanation: string;
    order: number;
}

const QUESTIONS_DATA: Question[] = [
    {
        id: "27971bca-6d37-4a58-bd2e-bae7aa1d3732",
        statement:
            "No aconselhamento genético de casais com infertilidade conjugal, a investigação de microdeleções na região do fator de azoospermia (AZF) no cromossomo Y é uma conduta frequente. Considere um homem com diagnóstico de oligospermia grave que apresenta uma microdeleção na sub-região AZFc. O casal planeja realizar uma Injeção Intracitoplasmática de Espermatozoide (ICSI). Do ponto de vista genético e reprodutivo, qual orientação deve ser fornecida ao casal quanto à transmissão dessa condição e ao prognóstico para a prole?",
        type: "MULTIPLE_CHOICE",
        options: [
            {
                label: "A",
                text: "Dado que a região AZFc está localizada na porção pseudoautossômica do cromossomo Y, a microdeleção pode ser transmitida tanto para descendentes do sexo masculino quanto feminino através da ICSI, com risco de 50% para ambas as proles.",
                correct: false,
            },
            {
                label: "B",
                text: "A microdeleção na região AZFc, por apresentar herança holândrica, será obrigatoriamente transmitida a todos os descendentes do sexo masculino gerados por ICSI, os quais herdarão o mesmo padrão de subfertilidade, enquanto as filhas não serão afetadas.",
                correct: true,
            },
            {
                label: "C",
                text: "A microdeleção AZFc constitui uma mutação somática de novo que não apresenta risco de transmissão para a descendência obtida por reprodução assistida, embora aumente a propensão a aneuploidias dos cromossomos sexuais na prole.",
                correct: false,
            },
            {
                label: "D",
                text: "A transmissão da microdeleção AZFc para os descendentes masculinos pode ser evitada por meio do teste genético pré-implantacional (PGT-M) seguido pela seleção de espermatozoides que sofreram recombinação homóloga compensatória.",
                correct: false,
            },
            {
                label: "E",
                text: "A deleção completa da região AZFc impede totalmente a produção de espermatozoides na linhagem germinativa, tornando a técnica de ICSI inviável e exigindo a utilização de sêmen heterólogo para evitar a transmissão da mutação.",
                correct: false,
            },
        ],
        explanation:
            "A região AZFc localiza-se na região não recombinante do cromossomo Y (MSY). Mutações ou microdeleções nessa região constituem herança restrita ao sexo (holândrica). Assim, se um homem com essa microdeleção tiver filhos do sexo masculino através de técnicas de reprodução assistida como a ICSI, todos os seus filhos homens herdarão o cromossomo Y deletado e apresentarão quadro semelhante de subfertilidade/oligospermia. As filhas não herdam o cromossomo Y e, portanto, são normais.",
        order: 1,
    },
    {
        id: "6531d425-2cf1-4fa3-8168-b7671e2f7fd8",
        statement:
            "Em um serviço de aconselhamento genético, Lúcia busca orientação. Sua mãe é comprovadamente portadora heterozigota de uma mutação patogênica causadora de Hemofilia A (uma condição recessiva ligada ao cromossomo X). O pai de Lúcia é biologicamente saudável. Para refinar o seu risco de ser portadora, Lúcia realiza um teste molecular para detecção da mutação familiar, cujo ensaio possui sensibilidade clínica de 80% (taxa de falso-negativo de 20%). O resultado do teste de Lúcia foi negativo. Aplicando o Teorema de Bayes para integrar a análise de heredograma e o teste de DNA, quais são as probabilidades de Lúcia ser portadora e de ela vir a gerar uma criança afetada em uma futura gestação com um parceiro saudável, respectivamente?",
        type: "MULTIPLE_CHOICE",
        options: [
            {
                label: "A",
                text: "1/5 (aproximadamente 20,0%) para a probabilidade posterior de ser portadora e 1/20 (aproximadamente 5,0%) para a probabilidade de gerar uma criança afetada.",
                correct: false,
            },
            {
                label: "B",
                text: "1/10 (aproximadamente 10,0%) para a probabilidade posterior de ser portadora e 1/40 (aproximadamente 2,5%) para a probabilidade de gerar uma criança afetada.",
                correct: false,
            },
            {
                label: "C",
                text: "1/6 (aproximadamente 16,7%) para a probabilidade posterior de ser portadora e 1/24 (aproximadamente 4,2%) para a probabilidade de gerar uma criança afetada.",
                correct: true,
            },
            {
                label: "D",
                text: "1/6 (aproximadamente 16,7%) para a probabilidade posterior de ser portadora e 1/12 (aproximadamente 8,3%) para a probabilidade de gerar uma criança afetada.",
                correct: false,
            },
            {
                label: "E",
                text: "1/2 (aproximadamente 50,0%) para a probabilidade posterior de ser portadora e 1/8 (aproximadamente 12,5%) para a probabilidade de gerar uma criança afetada.",
                correct: false,
            },
        ],
        explanation:
            "Pelo Teorema de Bayes: 1) Probabilidade a priori de ser portadora (P) = 1/2; de não ser portadora (NP) = 1/2. 2) Probabilidade condicional de testar negativo: se portadora, P(T-|P) = 0,20 (falso-negativo); se não portadora, P(T-|NP) = 1,00. 3) Probabilidade conjunta: P e T- = 1/2 * 0,2 = 0,10; NP e T- = 1/2 * 1,0 = 0,50. Suma das conjuntas = 0,60. 4) Probabilidade a posteriori de ser portadora: 0,10 / 0,60 = 1/6. Para gerar uma criança afetada (que deve ser um menino que herda o X mutado): P(mãe portadora) * P(transmitir o X mutado) * P(ser menino) = 1/6 * 1/2 * 1/2 = 1/24.",
        order: 2,
    },
    {
        id: "bf32f99f-52d9-4e52-819f-b624943a11b3",
        statement:
            "Ao analisar o heredograma de uma grande família afetada por uma forma de raquitismo hipofosfatêmico (herança dominante ligada ao cromossomo X), observa-se que as mulheres afetadas apresentam uma ampla variação na gravidade dos sintomas clínicos (desde hipofosfatemia leve assintomática até deformidades ósseas graves), enquanto os homens afetados apresentam consistentemente um fenótipo grave e uniforme. No aconselhamento genético, essa variação fenotípica observada exclusivamente nas mulheres heterozigotas é explicada biologicamente por qual mecanismo?",
        type: "MULTIPLE_CHOICE",
        options: [
            {
                label: "A",
                text: "Inativação aleatória de um dos cromossomos X (mosaico epigenético), na qual a proporção de células que expressam o alelo mutante ativo varia entre os tecidos-alvo das diferentes mulheres heterozigotas.",
                correct: true,
            },
            {
                label: "B",
                text: "Compensação de dose incompleta decorrente da homologia parcial entre as regiões pseudoautossômicas dos cromossomos X e Y nos homens, o que atenua a gravidade dos sintomas no sexo masculino.",
                correct: false,
            },
            {
                label: "C",
                text: "Fenômeno de imprinting genômico materno, no qual o alelo mutante é silenciado especificamente quando herdado por via materna, determinando a variação da gravidade clínica nas filhas afetadas.",
                correct: false,
            },
            {
                label: "D",
                text: "Efeito de penetrância incompleta decorrente da presença de modificadores autossômicos restritos ao sexo feminino, que impedem a transcrição do alelo mutante em tecidos específicos.",
                correct: false,
            },
            {
                label: "E",
                text: "Taxas diferenciais de recombinação homóloga entre os cromossomos X durante a meiose feminina, o que leva à deleção parcial do gene mutante em linhagens somáticas das mulheres afetadas.",
                correct: false,
            },
        ],
        explanation:
            "Nas mulheres heterozigotas para doenças ligadas ao X, o processo de inativação do cromossomo X (liconização) ocorre ao acaso no início do desenvolvimento embrionário. Isso cria um mosaico de tecidos onde algumas células expressam o alelo selvagem e outras o alelo mutante. Se houver inativação preferencial (desvio de inativação) do X que carrega o alelo mutante, o fenótipo será leve; se for o contrário, o fenótipo será grave, explicando a expressividade variável típica de mulheres heterozigotas para doenças ligadas ao X.",
        order: 3,
    },
];

export default function QuestionGenerated() {
    const [selectedOptions, setSelectedOptions] = useState<
        Record<string, string>
    >({});
    const [revealedExplanations, setRevealedExplanations] = useState<
        Record<string, boolean>
    >({});

    const handleSelectOption = (questionId: string, optionLabel: string) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [questionId]: optionLabel,
        }));
    };

    const toggleExplanation = (questionId: string) => {
        setRevealedExplanations((prev) => ({
            ...prev,
            [questionId]: !prev[questionId],
        }));
    };

    return (
        <div className="DepartureMono min-h-screen bg-[#141414] text-[#e5e5e5] font-mono p-4 md:p-8 max-w-5xl mx-auto selection:bg-amber-500 selection:text-black">
            <header className="mb-8 border-b border-[#262626] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <span className="text-[10px] text-[#737373] uppercase tracking-widest block mb-1">
                        ■ SISTEMA DE QUESTÕES · GABARITOL
                    </span>
                    <h1 className="text-xl font-bold text-amber-500 uppercase tracking-wider IbmPlexMono">
                        Aconselhamento Genético
                    </h1>
                </div>
                <div className="text-xs bg-[#1a1a1a] border border-[#262626] px-3 py-2 text-[#a3a3a3] uppercase tracking-wider self-start sm:self-auto">
                    TOTAL:{" "}
                    <span className="text-amber-500 font-bold">
                        {QUESTIONS_DATA.length}
                    </span>{" "}
                    QUESTÕES
                </div>
            </header>

            <div className="flex flex-col gap-8">
                {QUESTIONS_DATA.map((q, index) => {
                    const selectedLabel = selectedOptions[q.id];
                    const isExplanationRevealed = revealedExplanations[q.id];

                    return (
                        <div
                            key={q.id}
                            className="bg-[#1a1a1a] border border-[#262626] p-6 shadow-2xl relative"
                        >
                            <div className="text-[10px] text-[#737373] uppercase tracking-widest mb-4 pb-2 border-b border-[#262626] flex justify-between items-center">
                                <span>QUESTÃO #{index + 1}</span>
                                <span className="text-amber-500 font-bold">
                                    MÚLTIPLA ESCOLHA
                                </span>
                            </div>

                            <p className="text-sm leading-relaxed text-[#e5e5e5] mb-6 IbmPlexMono">
                                {q.statement}
                            </p>

                            <div className="flex flex-col gap-3 mb-6">
                                {q.options.map((opt) => {
                                    const isSelected =
                                        selectedLabel === opt.label;
                                    let optionStyle =
                                        "border-[#262626] bg-[#141414] text-[#a3a3a3] hover:border-amber-500/50 hover:text-white";

                                    if (isExplanationRevealed) {
                                        if (opt.correct) {
                                            optionStyle =
                                                "border-emerald-500/50 bg-emerald-500/10 text-emerald-400 font-bold";
                                        } else if (isSelected && !opt.correct) {
                                            optionStyle =
                                                "border-red-500/50 bg-red-500/10 text-red-400";
                                        }
                                    } else if (isSelected) {
                                        optionStyle =
                                            "border-amber-500 bg-amber-500/10 text-amber-500 font-bold";
                                    }

                                    return (
                                        <button
                                            key={opt.label}
                                            onClick={() =>
                                                handleSelectOption(
                                                    q.id,
                                                    opt.label,
                                                )
                                            }
                                            className={`w-full text-left p-4 border text-xs leading-relaxed transition-all duration-200 cursor-pointer flex items-start gap-3 rounded-sm ${optionStyle}`}
                                        >
                                            <span className="font-bold border border-current px-2 py-0.5 rounded-sm shrink-0">
                                                {opt.label}
                                            </span>
                                            <span className="IbmPlexMono">
                                                {opt.text}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-[#262626]">
                                <button
                                    type="button"
                                    onClick={() => toggleExplanation(q.id)}
                                    className="cursor-pointer border border-amber-500 bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-500 text-xs font-bold py-2.5 px-5 rounded-sm transition-all duration-300 uppercase tracking-widest text-center"
                                >
                                    {isExplanationRevealed
                                        ? "OCULTAR GABARITO"
                                        : "> VER GABARITO & COMETÁRIO"}
                                </button>

                                {selectedLabel && (
                                    <span className="text-[11px] text-[#737373] uppercase tracking-wider text-right self-center">
                                        SELECIONADO:{" "}
                                        <span className="text-amber-500 font-bold">
                                            {selectedLabel}
                                        </span>
                                    </span>
                                )}
                            </div>

                            {isExplanationRevealed && (
                                <div className="mt-6 p-4 bg-[#141414] border border-amber-500/30 text-xs leading-relaxed text-[#d4d4d4] IbmPlexMono">
                                    <div className="text-amber-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <span>■ EXPLICAÇÃO TÉCNICA</span>
                                    </div>
                                    <p>{q.explanation}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
