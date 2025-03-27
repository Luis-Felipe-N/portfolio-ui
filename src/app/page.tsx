import { Instrument_Sans } from 'next/font/google'

import { Skills } from './components/skills'
import { Header } from './components/header'

import { Contact } from './components/contact'
import { MainProjects } from './components/main-projects'
import { Footer } from './components/footer'
import Link from 'next/link'

const instrumentSans = Instrument_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`overflow-hidden flex min-h-screen flex-col items-center ${instrumentSans.className}`}
    >
      <Header />

      <section className="  px-12 max-w-5xl w-full items-start justify-between flex-col text-sm flex py-24">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white">
          Luis Felipe Nunes
        </h1>

        <span className="pb-4 py-2 text-lg line ">Desenvolvedor Fullstack</span>

        <p className={`text-lg sm:text-xl lg:text-xl font-extralight `}>
          Estudante de Ciências da Computação apaixonado por programação, com 2
          anos de experiência em Django e focado no desenvolvimento Fullstack
          com habilidades em React, Node.js.
        </p>
      </section>

      <section className="px-12 max-w-5xl w-full items-start justify-between flex-col text-sm flex pt-24">
        <h2 className="text-slate-900 font-semibold text-xl sm:text-3xl lg:text-4xl tracking-tight dark:text-white">
          projetos
        </h2>

        <MainProjects />

        <Link
          className="flex items-center gap-1 hover:font-medium mt-8 p-4 px-8 bg-slate-50 rounded-xl"
          href={'/projects'}
        >
          Ver todos
        </Link>
      </section>

      <Skills />

      <Contact />

      <Footer />
    </main>
  )
}
