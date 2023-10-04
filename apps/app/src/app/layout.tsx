import './globals.css'
import type { Metadata } from 'next'
import { Vollkorn, Berkshire_Swash } from 'next/font/google'
import Providers from './Providers'

const vollkorn = Vollkorn({ subsets: ['latin'], weight: ['400'] })
const berkshire = Berkshire_Swash({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  applicationName: 'TITLE',
  title: 'TITLE',
  description: 'DESCRIPTION',
  formatDetection: {
    telephone: false,
  },
  viewport: {
    minimumScale: 1,
    initialScale: 1,
    width: 'device-width',
    userScalable: false,
    viewportFit: 'cover',
  },
  themeColor: '',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'TITLE',
    startupImage: {
      url: 'images/apple_splash.png',
    },
  },
  twitter: {
    card: 'summary',
    title: 'TITLE',
    description: 'DESCRIPTION',
    creator: 'CREATOR',
    images: 'IMAGE_URL',
  },
  openGraph: {
    type: 'website',
    title: 'TITLE',
    description: 'DESCRIPTION',
    siteName: 'TITLE',
    url: 'DOMAIN',
    images: 'IMAGE_URL',
  },
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
