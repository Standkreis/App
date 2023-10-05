import './globals.css'
import { Vollkorn, Berkshire_Swash } from 'next/font/google'
import Providers from './Providers'
export { metadata } from './meta'
import { ClerkProvider } from '@clerk/nextjs'

const vollkorn = Vollkorn({ subsets: ['latin'], weight: ['400'] })
const berkshire = Berkshire_Swash({ subsets: ['latin'], weight: ['400'] })

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${vollkorn.className} ${berkshire.className}`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
