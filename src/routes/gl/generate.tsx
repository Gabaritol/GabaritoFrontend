import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/gl/generate')({
  component: GenerateExamPage,
})

function GenerateExamPage() {
  const [promptText, setPromptText] = useState('')
  const maxChars = 5000
  const minChars = 50

  const missingChars = Math.max(0, minChars - promptText.length)
  const canSubmit = promptText.length >= minChars

  return (
    <div className="min-h-screen bg-[#141414] text-[#e5e5e5] font-mono selection:bg-amber-500 selection:text-black flex flex-col">
      <header className="flex justify-between items-center p-6 border-b border-[#262626] text-xs uppercase tracking-widest text-[#737373]">
        <div className="text-amber-500 font-bold">GABARITOL_GENERATE_v1.0</div>
        <Link
          to="/"
          className="hover:text-white transition-colors cursor-pointer"
        >
          [X] CANCELAR
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
              ESCREVA EM TEXTO LIVRE. NOSSA IA EXTRAIRÁ A BANCA, CARGO E
              ASSUNTO.
            </div>
          </div>

          <div className="relative flex flex-col">
            <textarea
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder={`EXEMPLO: PRECISO DE 10 QUESTÕES DE MATEMÁTICA PARA O CARGO DE ESCRITURÁRIO.\n\nBANCA: BANCO DO BRASIL (CESGRANRIO)...\n\nDIFICULDADE: MÉDIA/DIFÍCIL...\n\nTÓPICOS: JUROS COMPOSTOS, PORCENTAGEM E PROBABILIDADE.\n\n(ESCREVA O MÁXIMO QUE PUDER — NOSSO MOTOR CUIDA DO RESTO)`}
              className="IbmPlexMono w-full h-[60vh] min-h-[400px] bg-[#1a1a1a] border border-[#262626] text-[#e5e5e5] placeholder:text-[#525252] p-6 focus:outline-none focus:border-amber-500/50 transition-colors resize-none text-xs leading-relaxed uppercase"
              spellCheck="false"
            />

            <div className="flex justify-between items-center mt-2 text-[10px] uppercase tracking-widest text-[#737373]">
              <span>
                {promptText.length} / {maxChars} CARACTERES
              </span>
              {missingChars > 0 ? (
                <span>
                  MÍNIMO: {minChars} (FALTAM {missingChars})
                </span>
              ) : (
                <span className="text-amber-500">MÍNIMO ATINGIDO ✓</span>
              )}
            </div>
          </div>

          <button
            disabled={!canSubmit}
            className={`cursor-pointer mt-4 py-6 px-4 border text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-sm
              ${
                canSubmit
                  ? 'border-amber-500 bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-black'
                  : 'border-[#262626] bg-[#1a1a1a] text-[#525252] cursor-not-allowed'
              }`}
          >
            {canSubmit ? 'INICIAR GERAÇÃO [ENTER] ➔' : 'AGUARDANDO CONTEXTO...'}
          </button>
        </section>

        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="border border-[#262626] p-6 bg-[#1a1a1a]/50">
            <div className="flex justify-between items-center border-b border-[#262626] pb-4 mb-4 text-[10px] uppercase tracking-widest font-bold">
              <span className="text-amber-500 flex items-center gap-2">
                <span>■</span> PARÂMETROS DA PROVA
              </span>
              <span className="text-[#525252]">LIVE</span>
            </div>

            <ul className="flex flex-col gap-4 text-[10px] uppercase tracking-wider text-[#737373]">
              <li className="flex flex-col gap-1">
                <span className="text-white">BANCA (BOARD)</span>
                <span>↳ MENCIONE CEBRASPE, VUNESP, ETC.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white">CARGO (POSITION)</span>
                <span>↳ EX: ANALISTA DE SISTEMAS, AUDITOR...</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white">ASSUNTO (TOPIC)</span>
                <span>↳ MATÉRIA OU TÓPICO ESPECÍFICO</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white">DIFICULDADE</span>
                <span>↳ FÁCIL, MÉDIA OU DIFÍCIL</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white">QTD. QUESTÕES</span>
                <span>↳ NÚMERO EXATO (EX: 10, 20, 50)</span>
              </li>
            </ul>
          </div>

          <div className="border border-[#262626] border-dashed p-6 bg-[#141414]">
            <div className="border-b border-[#262626] border-dashed pb-4 mb-4 text-[10px] uppercase tracking-widest font-bold text-[#a3a3a3]">
              ░ DICAS PARA A IA (GENERATION JOB)
            </div>

            <ul className="flex flex-col gap-3 text-[10px] uppercase tracking-wider text-[#737373]">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">&gt;</span>
                SEJA ESPECÍFICO NA LEGISLAÇÃO SE FOR CONCURSO DA ÁREA DE
                DIREITO.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">&gt;</span>
                INDIQUE SE AS QUESTÕES DEVEM SER MÚLTIPLA ESCOLHA OU
                CERTO/ERRADO.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">&gt;</span>O MOTOR VAI
                GERAR AS OPÇÕES E O GABARITO AUTOMATICAMENTE.
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  )
}
