'use client'

import { api } from "@/lib/api"
import { ArrowRight, GitBranch } from "@phosphor-icons/react"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"

export interface Project {
  id: string
  code: string
  preview: string
  createdAt: string
  description: string
  title: string
  finalizado: boolean
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
  const response = await api.get('projects/')
  return response.data.projects
}

export default async function Projects() {

  const { data: projects, isLoading } = useQuery<Project[]>(
    ['Projects'],
    async (): Promise<Project[]> => {
      const response = await getProjects()
      return response
    },
  )

  console.log(projects)
  return (
    <>
      <h1 className="font-bold text-slate-900 text-3xl">projects</h1>
      <ul className="flex flex-col gap-4">
        {projects && projects.map((project) => (
          <li key={project.id} className="border-b-2 pb-12 mt-12">
            <div className="flex gap-2 ">
              {project.thumb && (
                <Image
                  src={project.thumb.url}
                  width={72}
                  height={72}
                  quality={100}
                  className="rounded-lg object-contain object-center bg-slate-200"
                  alt=""
                />
              )}
              <div className="flex flex-col gap-1">
                <h1 className="text-gray-900 font-medium text-lg">{project.title}</h1>
                <p className="text-gray-500 text-sm font-normal">Website</p>
                {project.finalizado ? (<p className="text-gray-500 text-sm font-normal">Concluído</p>) : (<p className="text-gray-500 text-sm font-normal">Em andamento</p>)}
              </div>
            </div>

            <div className="h-full text-gray-800 dark:text-slate-200 mt-4">
              <div
                className={`text-description`}
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></div>
            </div>

            <div className="flex mt-2 items-center gap-4 transition">
              {project?.preview && (
                <Link
                  target="_blank"
                  href={project.preview}
                  className="flex items-center gap-1 hover:font-medium px-4 py-2 rounded text-sm bg-slate-100 text-slate-800"
                >
                  Ver mais <ArrowRight size={16} />
                </Link>
              )}

              {project?.code && (
                <Link
                  target="_blank"
                  href={project.code}
                  className="flex items-center gap-1 hover:font-medium px-4 py-2 rounded text-sm bg-slate-800 text-slate-50"
                >
                  Código fonte <GitBranch size={16} />
                </Link>
              )}
            </div>

            <div className="text-gray-500 mt-4 font-bold">
              <span className="">Competências</span>

              <div className="flex gap-2 mt-2">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-4 mt-1 shrink-0"><path d="M3.5 2C3.22386 2 3 2.22386 3 2.5V13.5C3 13.6818 3.09864 13.8492 3.25762 13.9373C3.41659 14.0254 3.61087 14.0203 3.765 13.924L7.5 11.5896L11.235 13.924C11.3891 14.0203 11.5834 14.0254 11.7424 13.9373C11.9014 13.8492 12 13.6818 12 13.5V2.5C12 2.22386 11.7761 2 11.5 2H3.5Z" fill="gray" fill-rule="evenodd" clip-rule="evenodd"></path></svg>

                <ul>
                  {project.languages.split(';').map((language, index, array) => (
                    <span key={index}>{language}{index < array.length - 1 ? ', ' : ''}</span>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ >
  )
}
