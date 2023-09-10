import Link from 'next/link'
import Image from 'next/image'
import { Fraunces } from 'next/font/google'

import { Project } from './projects'

interface CardProjectProps {
  project: Project
}

const fraunces = Fraunces({ subsets: ['latin'] })

export function CardProject({ project }: CardProjectProps) {
  return (
    <Link href={project.preview} className="h-full w-96 block px-1">
      <div className="w-full p-4 dark:bg-slate-900 bg-slate-50 rounded-lg">
        <div className="flex rounded items-center justify-center h-72 bg-gradient-to-r dark:from-slate-900 from-slate-100 to-blue-50">
          <Image
            src={project.thumb.url} // "https://framerusercontent.com/images/gtxhaHb4Xcmn4xzHti6evxds5nU.png"
            width={500}
            height={500}
            quality={10}
            className="rounded w-full block h-full object-cover"
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
