import { Link } from "@tanstack/react-router";

export default function Terms() {
    return (
        <div className="DepartureMono min-h-screen bg-[#141414] text-[#e5e5e5] font-mono text-xs selection:bg-amber-500 selection:text-black p-6 md:p-16 flex justify-center relative">
            <Link
                to="/"
                className="absolute top-6 left-6 text-[#737373] hover:text-white transition-colors text-base font-bold cursor-pointer"
                aria-label="Fechar"
            >
                X
            </Link>

            <main className="max-w-3xl w-full flex flex-col gap-8 pt-4 md:pt-8">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl md:text-2xl font-bold text-amber-500 tracking-wider">
                        TERMOS DE USO
                    </h1>
                    <p className="text-[10px] text-[#737373] tracking-widest">
                        Última atualização: 25 de julho de 2026
                    </p>
                </div>

                <section className="flex flex-col gap-3">
                    <h2 className="text-xs font-bold text-amber-500 tracking-wider">
                        1. ACEITAÇÃO DOS TERMOS
                    </h2>
                    <p className="text-[#a3a3a3] leading-relaxed tracking-wide text-[11px]">
                        Ao acessar ou utilizar o{" "}
                        <strong className="text-white">Gabaritol</strong>{" "}
                        (acessível em gabaritol.netlify.app), você concorda
                        expressamente em cumprir e estar vinculado aos presentes
                        Termos de Uso. Caso não concorde com qualquer disposição
                        aqui descrita, você não deve utilizar a plataforma.
                    </p>
                </section>

                <section className="flex flex-col gap-3">
                    <h2 className="text-xs font-bold text-amber-500 tracking-wider">
                        2. DESCRIÇÃO DO SERVIÇO
                    </h2>
                    <p className="text-[#a3a3a3] leading-relaxed tracking-wide text-[11px]">
                        O Gabaritol é uma plataforma baseada em Inteligência
                        Artificial que fornece ferramentas para auxiliar no
                        processamento de exames, criação de questões e geração
                        de gabaritos. O serviço inclui:
                    </p>
                    <ul className="flex flex-col gap-2 text-[#a3a3a3] text-[11px] leading-relaxed">
                        <li className="flex gap-2 items-start">
                            <span className="text-[#737373] font-bold">
                                &gt;
                            </span>
                            <div>
                                <strong className="text-white">
                                    Geração Automática:
                                </strong>{" "}
                                criação de resoluções e gabaritos a partir de
                                documentos e textos fornecidos pelo usuário.
                            </div>
                        </li>
                        <li className="flex gap-2 items-start">
                            <span className="text-[#737373] font-bold">
                                &gt;
                            </span>
                            <div>
                                <strong className="text-white">
                                    Gerenciamento de Créditos:
                                </strong>{" "}
                                acesso a funcionalidades avançadas mediante
                                saldo de créditos ou convites.
                            </div>
                        </li>
                        <li className="flex gap-2 items-start">
                            <span className="text-[#737373] font-bold">
                                &gt;
                            </span>
                            <div>
                                <strong className="text-white">
                                    Histórico e Atividade:
                                </strong>{" "}
                                acompanhamento do progresso e gabaritos gerados
                                na sua conta.
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="flex flex-col gap-3">
                    <h2 className="text-xs font-bold text-amber-500 tracking-wider">
                        3. RESPONSABILIDADE DO USUÁRIO
                    </h2>
                    <p className="text-[#a3a3a3] leading-relaxed tracking-wide text-[11px]">
                        Ao utilizar o serviço, você se compromete a:
                    </p>
                    <ul className="flex flex-col gap-2 text-[#a3a3a3] text-[11px] leading-relaxed">
                        <li className="flex gap-2 items-start">
                            <span className="text-[#737373] font-bold">
                                &gt;
                            </span>
                            <div>
                                Não enviar conteúdos ilícitos, ofensivos ou que
                                violem direitos autorais de terceiros.
                            </div>
                        </li>
                        <li className="flex gap-2 items-start">
                            <span className="text-[#737373] font-bold">
                                &gt;
                            </span>
                            <div>
                                Não tentar burlar os limites de requisição (rate
                                limiting) ou automatizar acessos sem autorização
                                prévia.
                            </div>
                        </li>
                        <li className="flex gap-2 items-start">
                            <span className="text-[#737373] font-bold">
                                &gt;
                            </span>
                            <div>
                                Manter a segurança das credenciais da sua conta
                                e do e-mail de autenticação.
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="flex flex-col gap-3">
                    <h2 className="text-xs font-bold text-amber-500 tracking-wider">
                        4. ISENÇÃO E LIMITAÇÃO DE RESPONSABILIDADE
                    </h2>
                    <p className="text-[#a3a3a3] leading-relaxed tracking-wide text-[11px]">
                        Os gabaritos e exames gerados por Inteligência
                        Artificial são ferramentas auxiliares de estudo. O
                        Gabaritol não garante 100% de precisão ou isenção de
                        erros nas respostas produzidas e recomenda a revisão do
                        material gerado pelo usuário.
                    </p>
                </section>

                <section className="flex flex-col gap-3">
                    <h2 className="text-xs font-bold text-amber-500 tracking-wider">
                        5. ALTERAÇÕES NOS TERMOS
                    </h2>
                    <p className="text-[#a3a3a3] leading-relaxed tracking-wide text-[11px]">
                        Reservamo-nos o direito de alterar estes Termos de Uso a
                        qualquer momento. As modificações entram em vigor
                        imediatamente após a publicação nesta página. O uso
                        continuado da aplicação após atualizações indica a
                        aceitação dos novos termos.
                    </p>
                </section>
            </main>
        </div>
    );
}
