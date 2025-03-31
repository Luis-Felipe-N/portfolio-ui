import Link from 'next/link'

export function Contact() {
  return (
    <section className="max-w-5xl w-full items-start justify-between flex-col text-sm flex py-8">
      <h2 className="text-slate-900 mb-4 font-medium text-xl">
        contato
      </h2>

      <div className=" w-full">
        <ul className='space-y-2 list-disc ps-8'>
          <li className=''>acesse meu <Link target='_blank' className='font-bold underline text-slate-900' href={'https://github.com/Luis-Felipe-N'}>github</Link></li>
          <li>acesse meu  <Link target='_blank' className='font-bold underline text-slate-900' href={'https://www.linkedin.com/in/luisfelipenunescarvalho/'}>linkedin</Link></li>
          <li>baixe meu <a target='_blank' className='font-bold underline text-slate-900' href="/curriculo-luis-felipe.pdf">currículo</a></li>
        </ul>

      </div>
    </section>
  )
}
