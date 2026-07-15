import { Link } from '@tanstack/react-router'

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#141414] text-[#e5e5e5]
    py-16 px-8 selection:bg-amber-500 selection:text-black"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <div className="text-sm uppercase tracking-[0.2em] font-bold text-white">
          GABARITOL © {new Date().getFullYear()} – TODOS OS DIREITOS RESERVADOS
        </div>

        <div className="IbmPlexMono text-[10px] uppercase tracking-wider text-[#737373]">
          GABARITOL É UM PRODUTO DA GABARITOL LTDA · CNPJ 00.000.000/0001-00
        </div>

        <nav
          className="flex items-center gap-8 text-[11px] uppercase 
        tracking-widest text-[#a3a3a3] mt-4 DepartureMono font-semibold"
        >
          <Link to="/" className="hover:text-amber-500 transition-colors">
            Termos
          </Link>
          <Link to="/" className="hover:text-amber-500 transition-colors">
            Privacidade
          </Link>
          <Link to="/" className="hover:text-amber-500 transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </footer>
  )
}
