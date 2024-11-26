import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import Header from '@/components/layout/Header'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Times General Supplies Ltd - Professional Printing Services',
  description: 'Leading printing solutions provider offering high-quality printing services, equipment, and supplies for businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        {children}
      </body>
    </html>
  )
}
