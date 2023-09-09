import Image from "next/image";
import { Button } from "./ui/button";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({ subsets: ['latin'] })

export function CardProject() {
  return (
    <div className='w-full py-12'>
          <Image
            src="/cover-anime.png"
            width={500}
            height={500}
            className='rounded-3xl w-full'
            alt=""
          />

          <h3 className='text-xl font-semibold py-4'>Kyuden</h3>
          <p className={`text-xl font-light ${fraunces.className}`}>Site de anime desenvolvido para coloca em pratica meus conhecimentos de Back-end (API-kyuden), Front-end (Site Kyuden) e design.</p>

          <div className='flex gap-2 py-4'>
            <Button variant="outline" className='w-full border-2 py-8 uppercase'>Ver projeto</Button>
            <Button variant="outline" className='w-full border-2 py-8 uppercase'>Código</Button>
          </div>
        </div>
  )
}