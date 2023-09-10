import { Fraunces, Instrument_Sans } from 'next/font/google'

import { Header } from './components/header'
import { CardProject } from './components/card-project'
import { BannerProject } from './components/banner-project'

import { api } from './lib/api'

const fraunces = Fraunces({ subsets: ['latin'] })
const instrumentSans = Instrument_Sans({ subsets: ['latin'] })

export interface Project {
  id: string
  code: string
  preview: string
  createdAt: string
  description: string
  title: string
  thumb: {
    url: string
    width?: number
    height?: number
  }
  languages: string
  video: {
    providerUid: string
  } | null
}

const getProjects = async (): Promise<Project[]> => {
  const { data } = await api('/projects')

  return data.projects
}

export default async function Home() {
  const projects = await getProjects()

  return (
    <main
      className={`flex min-h-screen flex-col items-center py-24 lg:p-24 md:px-12 sm:px-8  ${instrumentSans.className}`}
    >
      <Header />

      <section className="z-10 px-12 max-w-5xl w-full items-start justify-between flex-col text-sm flex py-24">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white">
          Luis Felipe Nunes
        </h1>

        <span className="pb-4 py-2 text-lg line font-mono">
          Desenvolvedor Fullstack
        </span>

        <p
          className={`text-lg sm:text-xl lg:text-2xl font-light ${fraunces.className}`}
        >
          Estudante de Ciências da Computação apaixonado por programação, com 2
          anos de experiência em Django e focado no desenvolvimento Fullstack
          com habilidades em React, Node.js.
        </p>
      </section>

      <section className="z-10 px-12 max-w-5xl w-full items-start justify-between flex-col text-sm flex py-24">
        <h2 className="text-slate-900 font-semibold text-xl sm:text-3xl lg:text-4xl tracking-tight  dark:text-white">
          projetos...
        </h2>

        <p className={`text-lg mt-4 font-light ${fraunces.className}`}>
          onde dediquei a maior parte do meu tempo, e é claro, muito estudo.
        </p>

        <BannerProject />
        <BannerProject />
      </section>

      <section className="flex gap-4">
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </section>
    </main>
  )
}
