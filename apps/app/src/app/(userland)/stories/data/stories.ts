import { CREATORS } from './creators'

export type Story = {
  id: number
  slug: string
  title: string
  description: string
  content: string
  image: string
  publishedAt: string
  tags: string[]
  creator: {
    name: string
    avatar: string
  }
}

export const STORIES: Story[] = [
  {
    id: 1,
    slug: 'unser-erstes-permakultur-design-konzept',
    title: 'Erstes Permakultur Design Konzept',
    description:
      'Wir stellen unser erstes Permakultur Design Konzept vor, ein Einblick in unsere Gedankenwelt.',
    content: '<h1>Willkommen</h1><p>Lorem ipsum dolor sit amet.</p>',
    image: '/images/garden-2.jpg',
    publishedAt: '14.10.2023',
    tags: ['Garten'],
    creator: CREATORS.huhn,
  },
  {
    id: 2,
    slug: 'was-ist-nachhaltige-forstwirtschaft',
    title: 'Was ist ein nachhaltiger Wald?',
    description:
      'Wir tauchen ein in eine für uns altbekannte und doch unbekannte Welt, der Wald.',
    content: '<h1>Willkommen</h1><p>Lorem ipsum dolor sit amet.</p>',
    image: '/images/forest.jpg',
    publishedAt: '14.10.2023',
    tags: ['Wald', 'Garten'],
    creator: CREATORS.sven,
  },
  {
    id: 3,
    slug: 'wie-geht-permakultur-in-der-stadt',
    title: 'Wie geht Permakultur in der Stadt?',
    description:
      'Einblicke in zahlreiche Permakultur Projekte in verschiedenen Städten, was kann man überhaupt machen?',
    content: '<h1>Willkommen</h1><p>Lorem ipsum dolor sit amet.</p>',
    image: '/images/city.jpg',
    publishedAt: '14.10.2023',
    tags: ['Stadt'],
    creator: CREATORS.sven,
  },
  // {
  //   id: 4,
  //   slug: '/mobile-huener-warum-und-wie',
  //   title: 'Mobile Hühner, warum und wies geht',
  //   description: 'Die Vor und Nachteile von einem mobilen Hühnerstall.',
  //   content: '<h1>Willkommen</h1><p>Lorem ipsum dolor sit amet.</p>',
  //   image: '/images/chickens-2.jpg',
  //   publishedAt: '14.10.2023',
  //   tags: ['Tiere'],
  //   creator: CREATORS.huhn,
  // },
]
