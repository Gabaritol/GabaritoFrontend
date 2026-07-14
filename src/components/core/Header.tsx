import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="text-[#e5e5e5] max-w-7xl mx-auto border-b border-[#262626] px-4 sm:px-8 py-5 flex items-center justify-between font-mono tracking-wider selection:bg-amber-500 selection:text-black">
      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="text-lg sm:text-xl font-black uppercase text-white hover:opacity-90 transition-opacity"
        >
          GABARITO<span className="text-amber-500">L</span>
        </Link>
        <span className="text-[10px] text-amber-500 border border-amber-500/30 px-1.5 py-0.5 rounded uppercase font-bold bg-amber-500/5">
          [BETA]
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase text-[#a3a3a3]">
        <Link
          to="/"
          className="cursor-not-allowed transition-colors duration-200"
          disabled
        >
          Corrigir
        </Link>
        <Link
          to="/"
          className="hover:text-white transition-colors duration-200"
        >
          Criar Gabarito
        </Link>
      </nav>

      <div>
        <Link
          to="/register"
          className="border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-black px-4 sm:px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm"
        >
          Entrar
        </Link>
      </div>
    </header>
  )
}
