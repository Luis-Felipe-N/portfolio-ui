import Image from 'next/image'

import { Fraunces } from 'next/font/google'
import { ArrowRight } from './icons'

const fraunces = Fraunces({ subsets: ['latin'] })

interface CardProjectProps {
  backdrop?: boolean
}

export function BannerProject({ backdrop = true }: CardProjectProps) {
  return (
    <div className="w-full py-12">
      {backdrop ? (
        <div className="dark:bg-slate-800 bg-slate-100 rounded-3xl flex justify-center py-12">
          <Image
            src="/cover-anime.png"
            width={500}
            height={500}
            className="rounded w-3/4"
            alt=""
          />
        </div>
      ) : (
        <div className="flex justify-center ">
          <Image
            src="/cover-anime.png"
            width={500}
            height={500}
            className="rounded w-full"
            alt=""
          />
        </div>
      )}

      <h3 className="text-xl font-semibold py-4 flex items-center gap-2">
        <span>Kyuden</span> <ArrowRight />
      </h3>
      <p className={`text-lg  ${fraunces.className} font-light`}>
        Site com mais de 400 animes dublados e legendados
      </p>
    </div>
  )
}
