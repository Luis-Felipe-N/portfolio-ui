import Link from "next/link";

export default function Header() {
  return (
    <header className="z-10 px-12 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="flex flex-col">
          <strong className="uppercase">Luis Felipe Nunes</strong>

          <small>i develop</small>
      </div>

        <nav className="flex gap-8">
          <li>
            <Link href={'/'}>inicio</Link>
          </li>

          <li>
            <Link href={'/'}>projetos</Link>
          </li>

          <li>
            <Link href={'/'}>contato</Link>
          </li>
        </nav>
    </header>
  )
}