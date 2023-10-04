import { Metadata } from 'next'

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
