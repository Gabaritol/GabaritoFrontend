import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/register')({
  component: CreateGabarito,
})

function CreateGabarito() {
  return (
    <div className="min-h-screen bg-[#141414] text-[#e5e5e5] font-mono p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-black uppercase text-white mb-4">
        &gt; NOVA CORREÇÃO DE GABARITO
      </h1>
      <p className="text-xs text-[#a3a3a3] uppercase tracking-wider">
        Arraste o arquivo ou use a câmera para começar o escaneamento.
      </p>
    </div>
  )
}
