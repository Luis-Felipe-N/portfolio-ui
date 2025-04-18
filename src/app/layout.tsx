import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { QueryProvider } from '@/provider/useQueryProvider'

import { Inter } from 'next/font/google'
import { Header } from './components/header'
import { Footer } from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luis Felipe | Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
