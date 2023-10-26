import Image from 'next/image'
import Link from 'next/link'

import { ArrowRight, GitBranch } from './icons'

import { Project } from '@/(app)/projects/page'

interface CardProjectProps {
  project: Project
}

export function CardProject({ project }: CardProjectProps) {
  return (
    // <Link href={project.preview} className="h-full" target="_blank">
    <div className="w-full dark:bg-slate-900 bg-slate-50 dark:hover:bg-slate-950 hover:bg-slate-100 h-full lg:p-8 p-4 rounded-3xl transition flex flex-col">
      <div className="flex justify-center ">
        <Image
          src={project.thumb.url}
          width={390}
          height={220}
          quality={50}
          className="rounded-t-xl aspect-video object-contain object-top w-full"
          alt=""
        />
      </div>

      <h3 className="text-xl flex items-center gap-2 font-semibold py-4">
        <span>{project.title}</span>
        <ul></ul>
      </h3>

      <div className="h-full">
        <div
          className={`font-light lg:text-base text-slate-800 dark:text-slate-200`}
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></div>
      </div>

      <div className="flex mt-2 items-center gap-4 transition">
        {project?.preview && (
          <Link
            target="_blank"
            href={project.preview}
            className="flex items-center gap-1 hover:font-medium"
          >
            Ver mais <ArrowRight size={16} />
          </Link>
        )}

        {project?.code && (
          <Link
            target="_blank"
            href={project.code}
            className="flex items-center gap-1 hover:font-medium"
          >
            Código fonte <GitBranch size={16} />
          </Link>
        )}
      </div>
    </div>
    // </Link>
  )
}
