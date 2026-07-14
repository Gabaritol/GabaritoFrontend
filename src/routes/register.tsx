import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/register')({
  component: CreateGabarito,
})

function CreateGabarito() {
  return (
    <div className="min-h-screen bg-[#141414] text-[#e5e5e5] font-mono p-8 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <h1 className="text-2xl font-black uppercase text-white mb-4">
        Adicione seu Email para começar!
      </h1>
      <input
        type="email"
        placeholder="Seu melhor email"
        className="w-[50%] bg-[#1a1a1a] border border-[#262626] placeholder:text-[#737373] text-[#e5e5e5] placeholder:uppercase tracking-wider py-2 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
      <button className="mt-4 bg-amber-500 text-[#141414] font-bold py-2 px-6 rounded hover:bg-amber-600 transition-colors">
        Enviar
      </button>
    </div>
  )
}
