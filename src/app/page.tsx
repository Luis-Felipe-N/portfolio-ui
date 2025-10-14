'use client'
import { Instrument_Sans } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { RandomFonts } from './components/random-fonts'
import { ArrowRight, Dot, File, GitBranch } from '@phosphor-icons/react'
import type { Project } from './(app)/projects/page'
import { api } from './lib/api'
import { useQuery } from '@tanstack/react-query'

const getProjects = async (): Promise<Project[]> => {
  const response = await api.get('projects/')
  return response.data.projects
}

export default function Home() {
  const { data: projects, isLoading } = useQuery<Project[]>(
    ['Projects'],
    async (): Promise<Project[]> => {
      const response = await getProjects()
      return response
    },
  )
  return (
    <div className="bg-[#faf9f6]">
      <main className="">
        <section className="h-screen grid place-items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <Image
                alt="Imagem de pefil de Luis Felipe Nunes de camisa branca com fundo cinza"
                src={'/perfil.png'}
                width={70}
                height={70}
                className="object-cover rounded-2xl"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl text-[#343330]">Im Luis Felipe</h1>
                <small>FullStack Developer</small>
              </div>
            </div>

            <RandomFonts className="text-5xl font-semibold mt-2">
              Eu resolvo problemas com código. Crio soluções que simplificam a vida das pessoas.
            </RandomFonts>
            <div className="mt-8 space-x-2 flex">
              <Link href={'https://github.com/Luis-Felipe-N'} target="_blank" className="flex items-center justify-center gap-2 bg-slate-800 text-white font-medium px-8 h-14 rounded-full">
                <GitBranch /> GitHub
              </Link>
              <Link href={'/LUIS_FELIPE_NUNES.pdf'} target="_blank" className="border flex items-center justify-center gap-2 bg-slate-200 text-slate-900 font-medium px-8 h-14 rounded-full">
                <File /> Curriculo
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-slate-200 border-2 border-t-2">
          <div className="max-w-6xl mx-auto">

            <ul className="py-24 space-y-24">
              {projects && projects.map(project => (
                <li key={project.id} className="grid grid-cols-2 place-items-center gap-8  px-8">
                  <div className="col-span-2 lg:col-span-1">
                    <ul className="flex items-center gap-2 text-[#303134]">
                      <li>{project.createdAt.slice(0, 4)}</li>
                      <li>
                        <Dot />
                      </li>
                      <li>{project.languages.split(';')[0]}</li>
                      <li>
                        <Dot />
                      </li>
                      <li>{project.languages.split(';')[1]}</li>
                    </ul>
                    <h2 className="text-5xl text-[#303134] my-4 font-medium tracking-tighter">{project.title}</h2>
                    <p className="text-[#303134] text-lg tracking-tighter">
                      <div dangerouslySetInnerHTML={{ __html: project.description }}>

                      </div>
                    </p>
                    <div className="flex mt-2 items-center gap-4">
                      {project?.preview && (
                        <Link
                          target="_blank"
                          href={project.preview}
                          className="flex items-center gap-1 hover:font-medium bg-slate-800 text-white h-10 px-4 rounded-full transition-all duration-75 text-sm"
                        >
                          Ver mais <ArrowRight size={16} />
                        </Link>
                      )}

                      {project?.code && (
                        <Link
                          target="_blank"
                          href={project.code}
                          className="flex items-center gap-1 hover:font-medium bg-slate-300 h-10 text-sm px-4 rounded-full transition-all duration-75 text-slate-900 border"
                        >
                          Código fonte <GitBranch size={16} />
                        </Link>
                      )}
                    </div>
                  </div>
                  <Image
                    alt=""
                    src={project.thumb.url}
                    width={2000}
                    height={2000}
                    className="rounded-2xl object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  )
}
