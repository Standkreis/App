import './globals.css'
import { Berkshire_Swash, Inter } from 'next/font/google'
import Providers from './Providers'
export { metadata } from './meta'

const inter = Inter({ subsets: ['latin'], weight: ['400'] })
const berkshire = Berkshire_Swash({ subsets: ['latin'], weight: ['400'] })

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${berkshire.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
