import './globals.css'
import type { Metadata } from 'next'
import { Vollkorn, Berkshire_Swash } from 'next/font/google'
import Providers from './Providers'

const vollkorn = Vollkorn({ subsets: ['latin'], weight: ['400'] })
const berkshire = Berkshire_Swash({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Standkreis',
  description: 'Standkreis App',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${vollkorn.className} ${berkshire.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
