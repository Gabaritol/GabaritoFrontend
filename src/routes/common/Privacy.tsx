import { Link } from "@tanstack/react-router";

export default function Privacy() {
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
                        POLÍTICA DE PRIVACIDADE
                    </h1>
                    <p className="text-[10px] text-[#737373] tracking-widest">
                        Última atualização: 25 de julho de 2026
                    </p>
                </div>

                <section className="flex flex-col gap-3">
                    <h2 className="text-xs font-bold text-amber-500 tracking-wider">
                        1. QUEM SOMOS
                    </h2>
                    <p className="text-[#a3a3a3] leading-relaxed tracking-wide text-[11px]">
                        <strong className="text-white">Gabaritol</strong>{" "}
                        (acessível em gabaritol.netlify.app) é uma plataforma de
                        otimização e geração de gabaritos/exames que utiliza
                        inteligência artificial para auxiliar no estudo e
                        resolução de questões. Esta política descreve como
                        coletamos, usamos e protegemos seus dados pessoais, em
                        conformidade com a Lei Geral de Proteção de Dados (LGPD
                        – Lei 13.709/2018).
                    </p>
                </section>

                <section className="flex flex-col gap-3">
                    <h2 className="text-xs font-bold text-amber-500 tracking-wider">
                        2. DADOS QUE COLETAMOS
                    </h2>
                    <p className="text-[#a3a3a3] leading-relaxed tracking-wide text-[11px]">
                        Coletamos os seguintes dados pessoais:
                    </p>
                    <ul className="flex flex-col gap-2 text-[#a3a3a3] text-[11px] leading-relaxed">
                        <li className="flex gap-2 items-start">
                            <span className="text-[#737373] font-bold">
                                &gt;
                            </span>
                            <div>
                                <strong className="text-white">Email:</strong>{" "}
                                utilizado para autenticação via código OTP e
                                identificação da conta.
                            </div>
                        </li>
                        <li className="flex gap-2 items-start">
                            <span className="text-[#737373] font-bold">
                                &gt;
                            </span>
                            <div>
                                <strong className="text-white">
                                    Exames e Gabaritos:
                                </strong>{" "}
                                arquivos, textos e questões enviados por você
                                para geração e análise de respostas.
                            </div>
                        </li>
                        <li className="flex gap-2 items-start">
                            <span className="text-[#737373] font-bold">
                                &gt;
                            </span>
                            <div>
                                <strong className="text-white">
                                    Endereço IP:
                                </strong>{" "}
                                coletado automaticamente para segurança, rate
                                limiting e prevenção de abuso.
                            </div>
                        </li>
                        <li className="flex gap-2 items-start">
                            <span className="text-[#737373] font-bold">
                                &gt;
                            </span>
                            <div>
                                <strong className="text-white">
                                    Dados de uso:
                                </strong>{" "}
                                eventos anônimos de navegação coletados para
                                melhoria contínua da aplicação.
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="flex flex-col gap-3">
                    <h2 className="text-xs font-bold text-amber-500 tracking-wider">
                        3. USO E ARMAZENAMENTO DOS DADOS
                    </h2>
                    <p className="text-[#a3a3a3] leading-relaxed tracking-wide text-[11px]">
                        Seus dados são utilizados estritamente para o
                        fornecimento dos serviços do Gabaritol, autenticação de
                        conta e prevenção de fraude. Não vendemos nem
                        compartilhamos seus dados pessoais com terceiros para
                        fins comerciais.
                    </p>
                </section>

                <section className="flex flex-col gap-3">
                    <h2 className="text-xs font-bold text-amber-500 tracking-wider">
                        4. SEUS DIREITOS (LGPD)
                    </h2>
                    <p className="text-[#a3a3a3] leading-relaxed tracking-wide text-[11px]">
                        Você possui o direito de solicitar a confirmação,
                        acesso, correção ou a exclusão definitiva dos seus dados
                        armazenados em nossos servidores a qualquer momento,
                        enviando uma solicitação através dos nossos canais de
                        suporte.
                    </p>
                </section>
            </main>
        </div>
    );
}
