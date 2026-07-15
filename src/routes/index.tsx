import Footer from '#/components/core/Footer'
import Header from '#/components/core/Header'
import Main from '#/components/core/Main'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Header />
      <hr />
      <Main />
      <hr />
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 mt-12 text-[#525252] 
      text-xs uppercase tracking-widest text-center flex flex-col gap-4"
      >
        <div>[Seção: Users]</div>
        <div>[Seção: Plans]</div>
        <div>[Seção: Questions]</div>
        <Footer />
      </div>
    </>
  )
}
