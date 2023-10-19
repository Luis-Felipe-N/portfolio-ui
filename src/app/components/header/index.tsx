'use client'

import Link from 'next/link'

import styles from './styles.module.scss'
import { useState } from 'react'

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header
      className={`px-12 max-w-5xl w-full items-center justify-between font-mono text-sm flex position-relative ${styles.header}`}
    >
      <Link href={'/'} className="flex flex-col">
        <strong className="uppercase">Luis Felipe Nunes</strong>

        <small>i develop</small>
      </Link>

      <nav
        className={`bg-slate-100 sm:bg-transparent z-30 lg:bg-transparent ${
          openMenu ? styles.active : ''
        }`}
      >
        <ul className="flex bg-slate-100 sm:bg-transparent z-30 lg:bg-transparent gap-8">
          <li>
            <Link href={'/'}>inicio</Link>
          </li>

          <li>
            <Link href={'/projects'}>projetos</Link>
          </li>
        </ul>
      </nav>

      <button
        className={`flex items-center gap-1 hover:font-medium p-4 px-8 bg-slate-50 rounded-xl z-40 lg:hidden md:hidden ${styles.menuMobile}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        menu
        <span></span>
      </button>
    </header>
  )
}
