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
        className={`bg-slate-200 sm:bg-transparent z-30 lg:bg-transparent ${
          openMenu ? styles.active : ''
        }}`}
      >
        <ul className="flex gap-8">
          <li>
            <Link href={'/'}>inicio</Link>
          </li>

          <li>
            <Link href={'/projects'}>projetos</Link>
          </li>

          <li>
            <Link href={'/'}>contato</Link>
          </li>
        </ul>
      </nav>

      <button
        className={`z-40 ${styles.menuMobile}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        menu
        <span></span>
      </button>
    </header>
  )
}
