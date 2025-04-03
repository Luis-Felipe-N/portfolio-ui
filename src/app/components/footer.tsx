export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="  text-slate-400 max-w-5xl mx-auto w-full items-start lg:justify-between text-sm flex py-12 lg:px-0 px-12 flex-wrap justify-center border-slate-50 border-t dark:border-slate-800">
      <p className="uppercase">luisj2felipe09@gmail.com</p>

      <p className="">© {currentYear} Luis Felipe Nunes</p>
    </footer>
  )
}
