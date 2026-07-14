import ScrambleText from '../animation/ScrambleText'
import FadeUp from '../animation/FadeUp'
import { Link } from '@tanstack/react-router'

export default function Main() {
  return (
    <main className="min-h-screen bg-[#141414] text-[#e5e5e5] font-mono px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-7xl mx-auto selection:bg-amber-500 selection:text-black">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 md:pt-16 lg:pt-24 pb-16 md:pb-20">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h2 className="IbmPlexMono text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-white">
            <ScrambleText text="CRIE OU CORRIJA SEUS" duration={300} />
            <br />
            <ScrambleText
              text="GABARITOS"
              className="text-amber-500"
              duration={300}
              delay={150}
            />{' '}
            <ScrambleText text="EM" duration={300} delay={150} />
            <br />
            <ScrambleText
              text="1 MINUTO"
              className="text-amber-500"
              duration={300}
              delay={100}
            />
          </h2>

          <FadeUp delay={100}>
            <p className="DepartureMono text-xs md:text-sm text-[#a3a3a3] uppercase tracking-wider max-w-xl leading-relaxed">
              Gere folhas de respostas inteligentes, escaneie cartões e valide
              dados com precisão cirúrgica de um sistema automatizado de alta
              performance.
            </p>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="DepartureMono mt-4 flex flex-col sm:flex-row items-stretch sm:items-start gap-4">
              <Link
                to="/register"
                className="w-full sm:w-auto border border-amber-500 bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-500 text-xs font-bold uppercase tracking-widest py-4 px-8 transition-all duration-330 rounded-sm text-center"
              >
                &gt; COMEÇAR ANÁLISE (GRÁTIS)
              </Link>

              <Link
                to="/register"
                className="w-full sm:w-auto text-[10px] text-[#737373] hover:text-white transition-colors uppercase tracking-widest py-4 px-2 text-center"
              >
                NÃO TEM CONTA? CRIE EM 1 MIN
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="DepartureMono mt-4 pt-8 border-t border-[#262626] flex flex-wrap gap-4 sm:gap-8 text-[11px] font-bold uppercase tracking-wider text-[#737373]">
              <div>
                <span className="text-white">+15.000</span> PROVAS CORRIGIDAS
              </div>
              <div>
                <span className="text-amber-500">99.8%</span> DE PRECISÃO
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={100} className="lg:col-span-5">
          <div className="DepartureMono bg-[#1a1a1a] border border-[#262626] p-4 flex flex-col gap-4 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[#737373] border-b border-[#262626] pb-2">
              <span>ÚLTIMO GABARITO</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                AO VIVO
              </span>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#212121] border border-[#2d2d2d] rounded-sm">
              <div className="w-8 h-8 rounded-full border border-amber-500/50 flex items-center justify-center text-amber-500 text-xs shrink-0 bg-amber-500/5">
                ✓
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xs font-bold uppercase text-white tracking-wider">
                  PROCESSAMENTO CONCLUÍDO
                </h4>
                <p className="text-[11px] text-[#a3a3a3] uppercase leading-normal">
                  O cartão-resposta foi escaneado e validado com sucesso pelo
                  sistema do Gabaritol.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between p-3 bg-[#141414] border border-[#262626] text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-amber-500 font-bold">01</span>
                  <span className="text-[#a3a3a3] uppercase">
                    Questão Matemática
                  </span>
                </div>
                <span className="font-bold px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 text-[10px]">
                  CORRETA
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#141414] border border-[#262626] text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-amber-500 font-bold">02</span>
                  <span className="text-[#a3a3a3] uppercase">
                    Língua Portuguesa
                  </span>
                </div>
                <span className="font-bold px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 text-[10px]">
                  CORRETA
                </span>
              </div>
            </div>

            <div className="border-t border-[#262626] pt-4 mt-2 text-center">
              <div className="text-2xl sm:text-3xl font-black tracking-widest text-white uppercase opacity-90">
                NOTA: <span className="text-amber-500">10.0</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-24 lg:pt-32 border-t border-[#262626] mt-16">
        <FadeUp delay={1} className="lg:col-span-5">
          <div className="bg-[#1a1a1a] border border-[#262626] p-6 font-mono text-xs">
            <div className="text-[#737373] uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2">
              <span className="text-red-500">■</span> ANÁLISE DE FALHAS —
              CORREÇÃO MANUAL
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <div className="flex justify-between text-[#a3a3a3] uppercase mb-1">
                  <span>Tempo Gasto</span>
                  <span className="text-amber-500">84% DE PERDA</span>
                </div>
                <div className="w-full bg-[#141414] h-2 border border-[#262626]">
                  <div className="bg-amber-500 h-full w-[84%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[#a3a3a3] uppercase mb-1">
                  <span>Margem de Erro</span>
                  <span className="text-amber-500">18% REVISÕES</span>
                </div>
                <div className="w-full bg-[#141414] h-2 border border-[#262626]">
                  <div className="bg-amber-500 h-full w-[18%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[#a3a3a3] uppercase mb-1">
                  <span>Estresse/Fadiga</span>
                  <span className="text-amber-500">92% CRÍTICO</span>
                </div>
                <div className="w-full bg-[#141414] h-2 border border-[#262626]">
                  <div className="bg-amber-500 h-full w-[92%]"></div>
                </div>
              </div>
            </div>

            <div className="text-[#525252] text-[10px] uppercase tracking-wider text-center mt-6 pt-4 border-t border-[#262626]">
              NENHUM PROFESSOR DEVERIA PASSAR POR ISSO
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={150} className="lg:col-span-7">
          <div className="flex flex-col gap-4">
            <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">
              O PROBLEMA
            </span>
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white leading-none">
              HUMANOS FALHAM → <br />O GABARITOL NÃO!
            </h3>
            <p className="text-xs md:text-sm text-[#a3a3a3] uppercase tracking-wider leading-relaxed max-w-xl">
              Corrigir dezenas de cartões de resposta manualmente gera cansaço
              físico, erros de digitação e notas injustas. Planilhas, papel
              rasurado e caneta vermelha só quebram o fluxo da sua instituição.
            </p>
          </div>
        </FadeUp>
      </section>

      <section className="pt-24 lg:pt-32">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="text-[#525252] text-[10px] font-bold uppercase tracking-widest">
              SOLUÇÕES DISPONÍVEIS
            </span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeUp delay={1}>
            <div className="bg-[#1a1a1a] border border-[#262626] p-6 flex flex-col gap-4 hover:border-amber-500/30 transition-colors h-full">
              <div className="text-2xl font-black text-amber-500">99.8%</div>
              <h4 className="text-xs font-bold uppercase text-white tracking-wider">
                CORREÇÃO VIA CÂMERA
              </h4>
              <p className="text-[11px] text-[#a3a3a3] uppercase leading-normal">
                Escaneie folhas de respostas pela webcam ou celular. O resultado
                sai em menos de 30 segundos.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={150}>
            <div className="bg-[#1a1a1a] border border-[#262626] p-6 flex flex-col gap-4 hover:border-amber-500/30 transition-colors h-full">
              <div className="w-12 h-4 border border-[#262626] flex flex-col justify-between p-0.5">
                <div className="h-[2px] bg-[#525252] w-full"></div>
                <div className="h-[2px] bg-[#525252] w-2/3"></div>
              </div>
              <h4 className="text-xs font-bold uppercase text-white tracking-wider">
                GERADOR DE FOLHAS
              </h4>
              <p className="text-[11px] text-[#a3a3a3] uppercase leading-normal">
                Crie cartões de resposta customizados em PDF prontos para
                impressão em segundos.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="bg-[#1a1a1a] border border-[#262626] p-6 flex flex-col gap-4 hover:border-amber-500/30 transition-colors relative h-full">
              <span className="absolute top-3 right-3 text-[9px] font-bold uppercase text-amber-500 bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.5 rounded-xs">
                PREMIUM
              </span>
              <div className="text-2xl font-black text-white">0.0s</div>
              <h4 className="text-xs font-bold uppercase text-white tracking-wider">
                EXPORTAÇÃO DIRETA
              </h4>
              <p className="text-[11px] text-[#a3a3a3] uppercase leading-normal">
                Vincule os resultados diretamente com sistemas escolares ou
                planilhas Excel sem digitar nada.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="pt-24 lg:pt-32 pb-16 flex flex-col items-center gap-6">
        <FadeUp>
          <div className="text-center flex flex-col gap-2">
            <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">
              COMO FUNCIONA O PROCESSO
            </span>
            <h3 className="text-xl md:text-3xl font-black uppercase text-white tracking-tight">
              3 ETAPAS VALIDAM A NOTA
            </h3>
            <p className="text-[11px] text-[#a3a3a3] max-w-lg mx-auto uppercase tracking-wider leading-relaxed">
              Todas as marcações calculadas em milissegundos com um único
              propósito: garantir precisão absoluta na nota.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
          <FadeUp delay={1}>
            <div className="p-4 border-l-2 border-[#262626] hover:border-amber-500 transition-colors">
              <h5 className="text-xs font-bold uppercase text-amber-500 tracking-wider">
                1. ESCANEAMENTO
              </h5>
              <p className="text-[10px] text-[#a3a3a3] uppercase mt-1">
                Lê a imagem enviada, alinha as bordas e calibra os eixos da
                folha.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={150}>
            <div className="p-4 border-l-2 border-[#262626] hover:border-amber-500 transition-colors">
              <h5 className="text-xs font-bold uppercase text-amber-500 tracking-wider">
                2. IDENTIFICAÇÃO
              </h5>
              <p className="text-[10px] text-[#a3a3a3] uppercase mt-1">
                Detecta a intensidade do grafite ou caneta nas bolhas marcadas.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="p-4 border-l-2 border-[#262626] hover:border-amber-500 transition-colors">
              <h5 className="text-xs font-bold uppercase text-amber-500 tracking-wider">
                3. AUDITORIA
              </h5>
              <p className="text-[10px] text-[#a3a3a3] uppercase mt-1">
                Cruza os dados com o gabarito oficial e gera logs de erros
                duplos.
              </p>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={150} className="w-full mt-4">
          <div className="w-full bg-[#1a1a1a] border border-[#262626] p-4 text-[11px] font-mono text-[#a3a3a3]">
            <div className="text-[10px] text-[#737373] uppercase tracking-widest mb-3 pb-2 border-b border-[#262626] flex flex-col sm:flex-row sm:justify-between gap-1">
              <span>■ DELIBERAÇÃO DELTA · GABARITO #8932</span>
              <span className="text-amber-500">STATUS: OK</span>
            </div>

            <div className="flex flex-col gap-2 uppercase tracking-wide">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-12">
                <span className="text-amber-500 w-24 shrink-0">
                  VISÃO COMP.
                </span>
                <span>
                  Mapeamento dos vértices da folha concluído com sucesso.
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-12">
                <span className="text-amber-500 w-24 shrink-0">CONFLITOS</span>
                <span>
                  Nenhuma dupla marcação ou rasura detectada nas questões.
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-12">
                <span className="text-amber-500 w-24 shrink-0">MÉTRICA</span>
                <span>Acurácia de detecção do preenchimento: 99.94%</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-12 pt-2 border-t border-[#262626]/40 mt-1">
                <span className="text-white font-bold w-24 shrink-0">
                  RESULTADO
                </span>
                <span className="text-green-400 font-bold">
                  PROVA PROCESSADA COM NOTA EXPORTADA
                </span>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  )
}
