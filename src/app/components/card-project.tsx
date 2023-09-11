import Link from 'next/link'
import Image from 'next/image'
import { Fraunces } from 'next/font/google'

import { Project } from './projects'

interface CardProjectProps {
  project: Project
}

export function CardProject({ project }: CardProjectProps) {
  return (
    <Link href={project.preview} className="h-full w-96 block px-1">
      <div className="w-full p-4 dark:bg-slate-900 bg-slate-50 rounded-lg">
        <div
          className={`flex relative rounded items-center justify-center h-72 overflow-hidden`}
        >
          <img
            src={project.thumb.url}
            className="rounded object-cover h-full top-0 left-0 right-0 bottom-0 absolute"
            style={{ filter: 'blur(60px)' }}
            alt=""
          />
          <Image
            src={project.thumb.url}
            width={500}
            height={500}
            className="z-10 rounded w-[90%] block aspect-video object-cover object-top"
            alt=""
          />
        </div>

        <h3 className="text-xl font-semibold py-2 mt-4 flex items-center gap-2 text-slate-900 dark:text-slate-100">
          <span>{project.title}</span>
        </h3>

        <div
          className={`font-light  text-slate-800 dark:text-slate-200 truncate ...`}
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></div>
      </div>
    </Link>
  )
}
