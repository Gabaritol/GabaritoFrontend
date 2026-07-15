import { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";

export default function Upload() {
    const [isDragging, setIsDragging] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            handleFile(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file: File) => {
        setFileName(file.name);
    };

    return (
        <div className="min-h-screen bg-[#141414] text-[#e5e5e5] font-mono selection:bg-amber-500 selection:text-black flex flex-col">
            <header className="flex justify-between items-center p-6 border-b border-[#262626] text-xs uppercase tracking-widest text-[#737373]">
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

            <main className="flex-1 flex flex-col items-center justify-center p-8">
                <div
                    className={`w-full max-w-3xl flex flex-col items-center justify-center p-12 transition-all duration-300 ${
                        isDragging
                            ? "bg-[#1a1a1a]/50 scale-[1.02]"
                            : "bg-transparent"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="flex items-center gap-2 mb-16">
                        <span className="text-amber-500 text-xl md:text-2xl IbmPlexMono">
                            &gt;
                        </span>
                        <h1 className="DepartureMono text-xl md:text-3xl text-white uppercase tracking-widest flex items-center">
                            {fileName
                                ? `ARQUIVO: ${fileName}`
                                : "ARRASTE SEU ARQUIVO AQUI"}
                            {!fileName && (
                                <span className="inline-block w-3 h-6 md:h-8 bg-[#e5e5e5] ml-2 animate-pulse"></span>
                            )}
                        </h1>
                    </div>

                    <div className="flex items-center gap-8 mb-6">
                        <div className="w-12 h-16 border border-[#525252] flex flex-col p-1.5 relative overflow-hidden opacity-70">
                            <span className="text-[7px] text-[#737373] uppercase tracking-wider">
                                .PDF
                            </span>
                            <div className="mt-auto flex flex-col gap-0.5 text-[#333] text-[5px] leading-[4px]">
                                <div>⣿⣿⣿⣿⣿⣿</div>
                                <div>⣿⣿⣿⣿⣿⣿</div>
                                <div>⣿⣿⣿⣿⣿⣿</div>
                                <div>⣿⣿⣿⣿⣿⣿</div>
                            </div>
                        </div>

                        {/* Ícone DOCX */}
                        <div className="w-12 h-16 border border-[#525252] flex flex-col p-1.5 relative overflow-hidden opacity-70">
                            <span className="text-[7px] text-[#737373] uppercase tracking-wider">
                                .DOCX
                            </span>
                            <div className="mt-auto flex flex-col gap-[3px] mb-1">
                                <div className="h-[1px] w-full bg-[#525252]"></div>
                                <div className="h-[1px] w-full bg-[#525252]"></div>
                                <div className="h-[1px] w-2/3 bg-[#525252]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="text-[10px] text-[#525252] uppercase tracking-widest mb-10 IbmPlexMono">
                        PDF · DOCX
                    </div>

                    <button
                        onClick={handleClick}
                        className="text-[10px] uppercase tracking-widest text-[#a3a3a3] hover:text-white transition-colors mb-16 cursor-pointer IbmPlexMono"
                    >
                        OU CLIQUE PARA SELECIONAR
                    </button>

                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="hidden"
                    />

                    <div className="max-w-2xl text-center text-[8px] md:text-[9px] uppercase tracking-widest text-[#525252] leading-loose IbmPlexMono">
                        AO ENVIAR, CONCORDO COM A{" "}
                        <Link
                            to="/"
                            className="text-amber-500 hover:text-amber-400 hover:underline transition-colors"
                        >
                            POLÍTICA DE PRIVACIDADE
                        </Link>{" "}
                        E AUTORIZO O PROCESSAMENTO DO MEU MATERIAL OU EDITAL POR
                        IA, INCLUINDO TRANSFERÊNCIA PARA SERVIDORES NOS EUA
                    </div>
                </div>
            </main>
        </div>
    );
}
