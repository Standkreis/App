'use client'

import Container from '@/components/Container'
import Page from '@/components/Page'
import ScrollToTop from '@/components/ScrollToTop'
import potato from '@/data/ecosystem/plants/entities/0001_potato'
import Hero from './components/Hero'

export default function Ecosystem() {
  const { name, content, media, tags } = potato

  return (
    <Page>
      <ScrollToTop />
      <Hero tags={tags} media={media} name={name} />
      <Container className="mt-8 max-w-3xl">
        <p>{content}</p>
      </Container>
    </Page>
  )
}
