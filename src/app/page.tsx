import { Fraunces, Inter } from 'next/font/google'

import { BannerProject } from './components/banner-project'
import { Project, Projects } from './components/projects'
import { Skills } from './components/skills'
import { Header } from './components/header'
import { api } from './lib/api'
import Link from 'next/link'
import { Contact } from './components/contact'

const instrumentSans = Inter({ subsets: ['latin'] })

const getProjects = async (): Promise<Project[]> => {
  const response = await api.get('projects/home')
  return response.data.projects
}

export default async function Home() {
  const projects = await getProjects()
  const currentYear = new Date().getFullYear()

  return (
    <main
      className={`flex min-h-screen flex-col items-center py-24 ${instrumentSans.className}`}
    >
      <Header />

      <section className="z-10 px-12 max-w-5xl w-full items-start justify-between flex-col text-sm flex py-24">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white">
          Luis Felipe Nunes
        </h1>

        <span className="pb-4 py-2 text-lg line ">Desenvolvedor Fullstack</span>

        <p className={`text-lg sm:text-xl lg:text-2xl font-extralight `}>
          Estudante de Ciências da Computação apaixonado por programação, com 2
          anos de experiência em Django e focado no desenvolvimento Fullstack
          com habilidades em React, Node.js.
        </p>
      </section>

      <section className="z-10 px-12 max-w-5xl w-full items-start justify-between flex-col text-sm flex pt-24">
        <h2 className="text-slate-900 font-semibold text-xl sm:text-3xl lg:text-4xl tracking-tight dark:text-white">
          projetos...
        </h2>

        <p className={`text-lg mt-4 font-light `}>
          onde dediquei a maior parte do meu tempo, e é claro, muito estudo.
        </p>

        {projects.map((project) => (
          <BannerProject key={project.id} project={project} />
        ))}
      </section>
      <Skills />

      <Contact />

      <footer className="z-10 text-slate-400 max-w-5xl w-full items-start lg:justify-between text-sm flex py-12 pb-0 mt-24 lg:px-0 px-12 flex-wrap justify-center border-slate-50 border-t dark:border-slate-800">
        <p className="uppercase">luisj2felipe@gmail.com</p>

        <p className="">© {currentYear} Luis Felipe Nunes</p>
      </footer>
    </main>
  )
}
