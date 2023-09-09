import { Fraunces, Instrument_Sans } from 'next/font/google'

import Header from './components/header'
import { CardProject } from './components/card-project'


const fraunces = Fraunces({ subsets: ['latin'] })
const instrumentSans = Instrument_Sans({ subsets: ['latin'] })
 

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24  ${instrumentSans.className}`}>
      <Header />

      <section className="z-10 px-12 max-w-5xl w-full items-start justify-between flex-col text-sm lg:flex py-24">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Luis Felipe Nunes
        </h1>

        <span className="pb-4 py-2 text-lg line font-mono">Desenvolvedor Fullstack</span>

        <p className={`text-2xl font-light ${fraunces.className}`}>
          Estudante de Ciências da Computação apaixonado por programação, com 2
          anos de experiência em Django e focado no desenvolvimento Fullstack
          com habilidades em React, Node.js.
        </p>
      </section>

      <section className="z-10 px-12 max-w-5xl w-full items-start justify-between flex-col text-sm lg:flex py-24">
        <h2 className="text-slate-900 font-semibold text-1xl sm:text-5xl lg:text-6xl tracking-tight  dark:text-white">
          projetos...
        </h2>

        <CardProject />
        <CardProject />
      </section>
    </main>
  )
}
