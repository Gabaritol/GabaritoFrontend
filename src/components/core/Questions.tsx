import { useState } from 'react'

export default function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'A GERAÇÃO GRATUITA MOSTRA O QUE EXATAMENTE?',
      answer:
        'QUESTÕES BÁSICAS DA BANCA ESCOLHIDA, GABARITO SIMPLES E INDICAÇÃO DE DIFICULDADE. TUDO GERADO PELO NOSSO MOTOR EM MENOS DE 30 SEGUNDOS.',
    },
    {
      question: 'COMO FUNCIONA A GERAÇÃO PAGA (PRO)?',
      answer:
        'ALÉM DO GABARITO, VOCÊ RECEBE UMA EXPLICAÇÃO DETALHADA DE CADA ALTERNATIVA, REVISÃO POR IA E OPÇÃO DE EXPORTAR A PROVA FORMATADA EM PDF.',
    },
    {
      question: 'E SE AS QUESTÕES FOREM REPETIDAS OU RUINS?',
      answer:
        'NOSSO MOTOR GARANTE CONTEÚDO INÉDITO BASEADO NOS PADRÕES DAS BANCAS. SE DETECTAR PROBLEMAS, SEUS CRÉDITOS SÃO DEVOLVIDOS. SEM PERGUNTAS.',
    },
    {
      question: 'VOCÊS COBRAM ASSINATURA MENSAL?',
      answer:
        'NÃO. VOCÊ PAGA APENAS PELOS CRÉDITOS QUE UTILIZAR, NO MODELO PAY-AS-YOU-GO. NADA DE COBRANÇAS SURPRESAS NO SEU CARTÃO.',
    },
    {
      question: 'MEUS CRÉDITOS EXPIRAM?',
      answer:
        'NÃO, SEUS CRÉDITOS NUNCA EXPIRAM. ELES FICAM VINCULADOS À SUA CONTA PARA SEMPRE ATÉ SEREM TOTALMENTE UTILIZADOS.',
    },
    {
      question: 'FUNCIONA PARA VAGAS E PROVAS EM INGLÊS?',
      answer:
        'SIM. NOSSA IA DETECTA O IDIOMA DO SEU PROMPT E GERA AS QUESTÕES COM BASE NO CONTEXTO E TERMINOLOGIA TÉCNICA CORRETA NO IDIOMA SOLICITADO.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full flex flex-col items-center py-24 bg-[#141414] text-[#e5e5e5] font-mono selection:bg-amber-500 selection:text-black">
      <h2 className="DepartureMono text-2xl md:text-4xl text-white uppercase tracking-widest mb-16 text-center">
        Perguntas Frequentes
      </h2>

      <div className="w-full max-w-4xl px-6 flex flex-col border-t border-[#262626]">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={index}
              className="border-b border-[#262626] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer hover:bg-[#1a1a1a]/50 transition-colors group"
              >
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-[#a3a3a3] group-hover:text-white transition-colors IbmPlexMono">
                  <span className="text-amber-500">&gt;</span>
                  {faq.question}
                </div>

                <div className="text-[#525252] text-xs font-bold font-mono">
                  {isOpen ? 'v' : '>'}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen
                    ? 'max-h-96 opacity-100 pb-6'
                    : 'max-h-0 opacity-0 pb-0'
                }`}
              >
                <div className="pl-6 md:pl-7 pr-4 text-[10px] md:text-xs uppercase tracking-wider text-[#737373] leading-relaxed IbmPlexMono">
                  {faq.answer}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
