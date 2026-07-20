import { useRef } from "react";

export default function Users() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const testimonials = [
        {
            id: 1,
            name: "dann",
            handle: "@danndevlH",
            avatar: "D",
            text: "Sinceramente, esse APP de questões foi o melhor que encontrei. O que mais tem por aí é um wrapper que só cospe texto e acabou. Consegui revisar pra prova em 2 etapas de forma super focada.",
            date: "17 abr 2026",
            replies: 1,
            rts: 4,
            likes: 105,
        },
        {
            id: 2,
            name: "Tacila",
            handle: "@netadomudo",
            avatar: "T",
            text: "OLHA O QUE 3 ROBÔS FIZERAM COM MEUS ESTUDOS\n\nMEU SCORE NOS SIMULADOS SUBIU DE 40 PARA 88 (+48 PONTOS) EM 2 MINUTOS....",
            date: "24 abr 2026",
            replies: 0,
            rts: 1,
            likes: 32,
        },
        {
            id: 3,
            name: "Guilherme Grimm ➔ grim...",
            handle: "@guilherme_grimm",
            avatar: "G",
            text: "Pouco se fala o quão BOM o gabaritol.com tá mlk\n\nDeu one shot no meu simulado (que já tava bom) e me mostrou exatamente as lacunas que eu tinha em direito administrativo.",
            date: "7 mai 2026",
            replies: 2,
            rts: 1,
            likes: 18,
        },
        {
            id: 4,
            name: "kauã ➔ closertime.com.br",
            handle: "@kvtrfz",
            avatar: "K",
            text: "simplesmente quem não tá usando o gabaritol tá deixando pontos na mesa\n\no trampo que os caras fizeram lá é surreal. tu gera a prova exata da tua banca.",
            date: "7 mai 2026",
            replies: 1,
            rts: 1,
            likes: 5,
        },
        {
            id: 5,
            name: "igor duca",
            handle: "@ducaswtf",
            avatar: "I",
            text: "fui conversar com um concurseiro que estuda comigo hoje e o cara tava reclamando que nunca passava da nota de corte... abri o gabaritol pra ele e a mente do maluco explodiu.",
            date: "29 abr 2026",
            replies: 31,
            rts: 19,
            likes: "1.4k",
        },
    ];

    return (
        <section className="w-full flex flex-col items-center py-24 bg-[#141414] text-[#e5e5e5] font-mono selection:bg-amber-500 selection:text-black overflow-hidden">
            <div className="text-amber-500 text-[10px] uppercase tracking-widest mb-4 IbmPlexMono font-bold">
                A PROVA
            </div>

            <h2 className="DepartureMono text-3xl md:text-5xl text-white uppercase tracking-widest mb-4 text-center">
                5403+ USUÁRIOS
            </h2>

            <div className="text-[#737373] text-[10px] uppercase tracking-widest IbmPlexMono mb-16">
                NÃO FIQUE PARA TRÁS!
            </div>
            <div
                ref={carouselRef}
                className="w-full flex gap-4 px-8 overflow-x-auto snap-x snap-mandatory pb-8
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
                {testimonials.map((tweet) => (
                    <div
                        key={tweet.id}
                        className="flex-none w-[320px] md:w-[380px] bg-[#161616] border border-[#262626] rounded-xl p-5 flex flex-col snap-center hover:border-[#333] transition-colors"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#262626] flex items-center justify-center text-white font-bold IbmPlexMono uppercase text-lg">
                                    {tweet.avatar}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-white font-semibold IbmPlexMono truncate max-w-[180px]">
                                        {tweet.name}
                                    </span>
                                    <span className="text-xs text-[#737373] IbmPlexMono">
                                        {tweet.handle}
                                    </span>
                                </div>
                            </div>

                            <div className="text-[#737373]">
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="w-5 h-5 fill-current"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="flex-1">
                            <p className="text-sm text-[#e5e5e5] whitespace-pre-wrap leading-relaxed font-sans mb-1">
                                {tweet.text}
                            </p>
                            <button className="text-[#3b82f6] text-sm hover:underline font-sans cursor-pointer">
                                ler mais
                            </button>
                        </div>

                        <div className="text-[11px] text-[#737373] mt-4 mb-4 font-sans">
                            {tweet.date}
                        </div>

                        <hr className="border-[#262626] mb-3" />

                        <div className="flex justify-between items-center text-[#737373] text-xs px-1">
                            <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 fill-current"
                                >
                                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                                </svg>
                                <span>
                                    {tweet.replies > 0 ? tweet.replies : ""}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 hover:text-[#00ba7c] cursor-pointer transition-colors">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 fill-current"
                                >
                                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                                </svg>
                                <span>{tweet.rts > 0 ? tweet.rts : ""}</span>
                            </div>
                            <div className="flex items-center gap-2 hover:text-[#f91880] cursor-pointer transition-colors">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 fill-current"
                                >
                                    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                                </svg>
                                <span>{tweet.likes}</span>
                            </div>
                            <div className="flex items-center gap-2 hover:text-[#1d9bf0] cursor-pointer transition-colors">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 fill-current"
                                >
                                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
