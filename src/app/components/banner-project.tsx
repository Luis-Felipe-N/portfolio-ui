import Image from 'next/image'

import { Fraunces } from 'next/font/google'
import { ArrowRight } from './icons'
import { Project } from './projects'

const fraunces = Fraunces({ subsets: ['latin'] })

interface CardProjectProps {
  backdrop?: boolean
  project: Project
}

export function BannerProject({ backdrop = true, project }: CardProjectProps) {
  return (
    <div className="w-full py-12">
      {backdrop ? (
        <div className="dark:bg-slate-800 bg-slate-100 rounded-3xl flex justify-center lg:p-12">
          <Image
            src={project.thumb.url}
            width={500}
            height={500}
            className="rounded aspect-video object-cover object-top w-full"
            alt=""
          />
        </div>
      ) : (
        <div className="flex justify-center ">
          <Image
            src="/cover-anime.png"
            width={500}
            height={500}
            className="rounded object-top w-full"
            alt=""
          />
        </div>
      )}

      <h3 className="text-xl font-semibold py-4 flex items-center gap-2">
        <span>{project.title}</span> <ArrowRight size={16} />
      </h3>
      <div
        className={`font-light text-lg text-slate-800 dark:text-slate-200`}
        dangerouslySetInnerHTML={{ __html: project.description }}
      ></div>
    </div>
  )
}
