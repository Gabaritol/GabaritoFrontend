export default function Plans() {
  return (
    <section className="w-full flex flex-col items-center py-24 bg-[#141414] text-[#e5e5e5] font-mono selection:bg-amber-500 selection:text-black">
      <div className="text-amber-500 text-[10px] uppercase tracking-widest mb-4 IbmPlexMono">
        Planos
      </div>

      <h2 className="DepartureMono text-3xl md:text-5xl text-white uppercase tracking-widest mb-10 text-center">
        Escolha seu plano
      </h2>

      <div className="border border-amber-500/40 px-6 py-3 text-amber-500 text-[10px] uppercase tracking-widest IbmPlexMono">
        Nada de assinatura, use seus créditos à vontade
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full px-6 mt-16 IbmPlexMono">
        <div className="border-t border-[#e5e5e5] border-x border-b border-x-transparent border-b-transparent hover:border-[#262626] transition-colors bg-transparent p-8 flex flex-col">
          <div className="text-[10px] text-[#737373] uppercase tracking-widest mb-4">
            [ENTRADA]
          </div>
          <h3 className="DepartureMono text-2xl text-white uppercase mb-2">
            Grátis
          </h3>
          <div className="DepartureMono text-xl text-white mb-2">R$0</div>
          <div className="text-[10px] text-[#737373] uppercase tracking-widest">
            Ilimitado
          </div>

          <hr className="border-[#262626] border-dashed my-6" />

          <ul className="flex-1 flex flex-col gap-4 text-[10px] uppercase tracking-wider text-[#a3a3a3]">
            <li>✓ Geração Básica de Questões</li>
            <li>✓ Resultado Instantâneo</li>
            <li className="text-[#525252] line-through">
              x Exportar Prova em PDF
            </li>
            <li className="text-amber-500/50 line-through">
              x IA Exclusiva de Feedback
            </li>
          </ul>

          <button className="mt-8 w-full border border-[#262626] bg-transparent hover:border-white hover:text-white py-4 text-[10px] uppercase tracking-widest transition-colors text-[#a3a3a3]">
            &gt; Começar Grátis
          </button>
        </div>

        <div className="border border-[#262626] bg-[#1a1a1a]/30 p-8 flex flex-col">
          <div className="text-[10px] text-[#737373] uppercase tracking-widest mb-4">
            [10 VAGAS]
          </div>
          <h3 className="DepartureMono text-2xl text-white uppercase mb-2">
            Premium
          </h3>
          <div className="text-[10px] text-[#525252] line-through mb-1">
            De R$60
          </div>
          <div className="DepartureMono text-xl text-white mb-2">Por R$28</div>
          <div className="text-[10px] text-amber-500 uppercase tracking-widest">
            Economia de R$32
          </div>

          <hr className="border-[#262626] border-dashed my-6" />

          <ul className="flex-1 flex flex-col gap-4 text-[10px] uppercase tracking-wider text-[#a3a3a3]">
            <li>✓ Tudo do Gratuito</li>
            <li>✓ 10 Gerações Otimizadas</li>
            <li>✓ Exportar Prova em PDF</li>
            <li>✓ Histórico de 30 dias</li>
          </ul>

          <button className="mt-8 w-full border border-[#262626] bg-[#1a1a1a] hover:border-white hover:text-white py-4 text-[10px] uppercase tracking-widest transition-colors text-[#a3a3a3]">
            &gt; Escolher Premium
          </button>
        </div>

        <div className="border border-amber-500 bg-[#1a1a1a]/60 p-8 flex flex-col relative shadow-[0_0_15px_rgba(245,158,11,0.05)]">
          <div className="text-[10px] text-amber-500 uppercase tracking-widest mb-4">
            [MAIS USADO]
          </div>
          <h3 className="DepartureMono text-2xl text-white uppercase mb-2">
            Pro
          </h3>
          <div className="text-[10px] text-[#525252] line-through mb-1">
            De R$300
          </div>
          <div className="DepartureMono text-xl text-white mb-2">Por R$56</div>
          <div className="text-[10px] text-amber-500 uppercase tracking-widest">
            Economia de R$244
          </div>

          <hr className="border-[#262626] border-dashed my-6" />

          <ul className="flex-1 flex flex-col gap-4 text-[10px] uppercase tracking-wider text-[#a3a3a3]">
            <li>✓ Tudo do Premium</li>
            <li>✓ 50 Gerações Otimizadas</li>
            <li>✓ IA Exclusiva de Feedback Semanal</li>
            <li>✓ Dicas de Estudo Baseadas nos seus dados</li>
            <li>✓ Insights do seu Quadro de Acertos</li>
          </ul>

          <button className="mt-8 w-full border border-amber-500 bg-amber-500/10 hover:bg-amber-500 hover:text-black py-4 text-[10px] uppercase tracking-widest transition-colors text-amber-500 font-bold">
            &gt; Escolher Pro
          </button>
        </div>
      </div>

      <div className="mt-20 border border-[#262626] px-8 py-6 text-center max-w-2xl w-full mx-6 bg-[#1a1a1a]/20">
        <p className="text-[10px] uppercase tracking-widest text-[#737373] IbmPlexMono leading-relaxed">
          <span className="text-white font-bold">
            [OK] 100% DINHEIRO DE VOLTA
          </span>
          <br />
          SEU SCORE NÃO SUBIU? CRÉDITOS DEVOLVIDOS. SEM PERGUNTAS.
        </p>
      </div>
    </section>
  )
}
