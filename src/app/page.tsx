import { Instrument_Sans } from 'next/font/google'

import { Skills } from './components/skills'
import { Header } from './components/header'

import { Contact } from './components/contact'
import { MainProjects } from './components/main-projects'
import { Footer } from './components/footer'
import Link from 'next/link'
import Image from 'next/image'

const instrumentSans = Instrument_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`max-w-5xl w-full mx-auto py-12 px-12 lg:px-0`}
    >
      <h1 className="font-bold text-slate-900 text-3xl">bem-vindo</h1>
      <section className="max-w-5xl w-full items-start justify-between flex-col text-sm flex py-12">
        <h2 className='text-slate-900 mb-4 font-medium text-xl'>sobre</h2>

        <div className='gap-8 grid grid-cols-5 '>
          <figure className="flex flex-col items-center text-center col-span-5 lg:col-span-2">
            <Image
              src="/apresentacao-geramais.jpeg"
              alt="Uma reunião de trabalho em uma sala de conferências, onde cinco pessoas estão discutindo uma apresentação exibida em uma grande tela na parede. A tela mostra uma cidade iluminada ao entardecer e uma interface de software com a foto e informações de uma pessoa. Um homem em pé, vestindo uma camiseta preta com estampas verdes e brancas, está olhando para a tela enquanto os outros participantes, sentados ao redor da mesa, observam atentamente. Uma mulher de vestido estampado também está em pé, próxima ao grupo. A sala tem paredes brancas, cadeiras executivas e notebooks sobre a mesa."
              width={500}
              height={500}
            />
            <figcaption className="mt-2 text-gray-600 text-xs max-w-sm">
              Apresentação do sistema Gera+ para o Reitor da Universidade Federal do Tocantins. 2023
            </figcaption>
          </figure>
          <div className='space-y-4 text-base text-gray-800 col-span-5 lg:col-span-3'>
            <p>
              Sou Luis Felipe Nunes de Carvalho, desenvolvedor Full Stack apaixonado por tecnologia e inovação. Atualmente, curso Ciência da Computação na Fundação Universidade Federal do Tocantins e tenho experiência no desenvolvimento de aplicações web. Minha jornada profissional inclui estágio como desenvolvedor full-stack, onde atuei na criação sistemas institucionais, além de prestar suporte técnico e orientar novos estagiários. Além disso, participei de projetos acadêmicos, desenvolvendo soluções tecnológicas para aprimorar processos educacionais e institucionais.
            </p>
          </div>
        </div>

      </section>

      <section className="max-w-5xl w-full items-start justify-between flex-col text-sm flex ">
        <h2 className='text-slate-900 mb-4 font-medium text-xl'>habilidades</h2>

        <div className='space-y-4 text-base text-gray-800 '>
          <p>
            Tenho experiência no desenvolvimento Full Stack, criando aplicações web escaláveis e intuitivas. Trabalho com Django e Django REST Framework para back-end, utilizando PostgreSQL e Firebase para banco de dados. No front-end, desenvolvo interfaces modernas com Next.js, React.js, TailwindCSS e SCSS, garantindo acessibilidade e boa experiência do usuário. Tenho domínio em integração de APIs, manipulação de imagens, hospedagem e deploy, além de atuar em testes e qualidade com PyTest e Selenium. Também possuo experiência em gerenciamento de projetos, otimização de performance e design UX/UI, aplicando boas práticas para criar soluções eficientes.
          </p>
        </div>

      </section>


      <Contact />

    </main>
  )
}
