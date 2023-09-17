import Image from 'next/image'

import { ArrowRight } from './icons'
import { Project } from './projects'
import Link from 'next/link'

interface CardProjectProps {
  project: Project
}

export function CardProject({ project }: CardProjectProps) {
  return (
    <Link href={project.preview} className="h-full" target="_blank">
      <div className="w-full dark:hover:bg-slate-900 hover:bg-slate-100 h-full p-8 rounded-3xl transition">
        <div className="flex justify-center ">
          <Image
            src={project.thumb.url}
            width={390}
            height={220}
            className="rounded aspect-video object-contain object-top w-full"
            alt=""
          />
        </div>

        <h3 className="text-xl flex items-center gap-2 font-semibold py-4">
          <span>{project.title}</span> <ArrowRight size={16} />
        </h3>
        <div
          className={`font-light text-lg text-slate-800 dark:text-slate-200`}
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></div>
      </div>
    </Link>
  )
}
