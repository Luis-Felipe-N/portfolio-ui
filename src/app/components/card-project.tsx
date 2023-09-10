import Link from 'next/link'
import Image from 'next/image'
import { Fraunces } from 'next/font/google'

import { Project } from './projects'

interface CardProjectProps {
  project: Project
}

const fraunces = Fraunces({ subsets: ['latin'] })

export function CardProject({ project }: CardProjectProps) {
  console.log(project.thumb.width)
  return (
    <Link href={project.preview} className="flex-shrink-0 w-96 block">
      <div className="w-96 p-4 dark:bg-slate-900 bg-slate-50 rounded-lg">
        <div className="flex rounded items-center justify-center h-96 bg-gradient-to-r dark:from-slate-900 from-slate-100 to-blue-50">
          <Image
            src={project.thumb.url}
            width={500}
            height={500}
            className="rounded w-full"
            alt=""
          />
        </div>

        <h3 className="text-xl font-semibold py-4 mt-4 flex items-center gap-2 text-slate-900 dark:text-slate-100">
          <span>{project.title}</span>
        </h3>
        <p
          className={`${fraunces.className} font-light text-slate-800 dark:text-slate-200`}
        >
          <span
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></span>
        </p>
      </div>
    </Link>
  )
}
