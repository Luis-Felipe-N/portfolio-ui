import Image from 'next/image'
import { Fraunces } from 'next/font/google'

import { Project } from '@/page'
import Link from 'next/link'

interface CardProjectProps {
  project: Project
}

const fraunces = Fraunces({ subsets: ['latin'] })

export function CardProject({ project }: CardProjectProps) {
  return (
    <Link href={project.preview}>
      <div className="w-96 py-12 px-8 bg-slate-900 rounded-lg">
        <div className=" flex justify-center h-64">
          <Image
            src={project.thumb.url}
            width={500}
            height={500}
            className="rounded w-full"
            alt=""
          />
        </div>

        <h3 className="text-xl font-semibold py-4 mt-4 flex items-center gap-2">
          <span>{project.title}</span>
        </h3>
        <p className={`${fraunces.className} font-light`}>
          <span
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></span>
        </p>
      </div>
    </Link>
  )
}
