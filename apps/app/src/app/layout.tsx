import './globals.css'
import type { Metadata } from 'next'
import { Vollkorn, Berkshire_Swash } from 'next/font/google'
import Providers from './Providers'

const vollkorn = Vollkorn({ subsets: ['latin'], weight: ['400'] })
const berkshire = Berkshire_Swash({ subsets: ['latin'], weight: ['400'] })

const META = {
  title: 'Standkreis',
  description:
    'Reshape our ecological, social and economic systems towards a more sustainable future.',
  creator: 'Standkreis',
  url: 'standkreis.com',
  images: {
    twitter: 'images/twitter.png',
    appleSplash: 'images/apple_splash.png',
  },
}

export const metadata: Metadata = {
  applicationName: META.title,
  title: META.title,
  description: META.description,
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
  themeColor: '#081416',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: META.title,
    startupImage: {
      url: '/apple_splash.png',
    },
  },
  twitter: {
    card: 'summary',
    title: META.title,
    description: META.description,
    creator: META.creator,
    images: META.images.twitter,
  },
  openGraph: {
    type: 'website',
    title: META.title,
    description: META.description,
    siteName: META.title,
    url: META.url,
    images: META.images.twitter,
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
