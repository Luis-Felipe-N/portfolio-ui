'use client'

import Link from 'next/link'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogHeader,
  AlertDialogFooter,
} from './ui/alert-dialog'
import { Button } from './ui/button'
import { File, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

export function Contact() {
  const [curriculoModalIsVisible, setCurriculoModalIsVisible] = useState<
    boolean | null
  >(null)

  return (
    <section className="z-10 px-12 max-w-5xl w-full items-start justify-between flex-col text-sm flex ">
      <h2 className="text-slate-900 font-semibold text-xl sm:text-3xl lg:text-4xl tracking-tight dark:text-white">
        contato
      </h2>

      <div className="font-mono mt-4 w-full">
        <nav className="flex flex-col gap-2 w-full">
          <Link
            className="p-4 bg-slate-900 w-full flex gap-4 items-center rounded-md"
            href={'https://github.com/Luis-Felipe-N'}
          >
            <GithubLogo size={18} /> <span>GitHub</span>
          </Link>

          <Link
            className="p-4 bg-slate-900 w-full flex gap-4 items-center rounded-md"
            href={'https://www.linkedin.com/in/luisfelipenunescarvalho/'}
          >
            <LinkedinLogo size={18} />
            <span>LinkedIn</span>
          </Link>
          <a
            href="/curriculo.pdf"
            className="p-4 bg-blue-900 w-full flex gap-4 items-center rounded-md"
          >
            <File size={18} />
            <span>Currículo</span>
          </a>
        </nav>
      </div>
    </section>
  )
}
