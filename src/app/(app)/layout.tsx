import { Instrument_Sans } from 'next/font/google'

import { Header } from '@/components/header'

const instrumentSans = Instrument_Sans({ subsets: ['latin'] })

export default function layoutApp({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getFullYear()

  return (
    <main
      className={`flex min-h-screen flex-col items-center py-24 ${instrumentSans.className}`}
    >
      <Header />

      <div className="flex-1">{children}</div>

      <footer className="z-10 text-slate-400 max-w-5xl w-full items-start justify-between text-sm flex py-12 pb-0 mt-24  border-slate-50 border-t dark:border-slate-800">
        <p className="uppercase">luisj2felipe@gmail.com</p>

        <p className="">© {currentYear} Luis Felipe Nunes</p>
      </footer>
    </main>
  )
}
