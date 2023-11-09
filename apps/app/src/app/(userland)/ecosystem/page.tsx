'use client'

import Container from '@/components/Container'
import Page from '@/components/Page'
import ScrollToTop from '@/components/ScrollToTop'
import potato from '@/data/ecosystem/plants/entities/0001_potato'
import Hero from './components/Hero'
import Infos from './components/Infos'

export default function Ecosystem() {
  const { name, content, media, tags, sections } = potato

  return (
    <Page>
      <ScrollToTop />
      <Hero tags={tags} media={media} name={name} />
      {sections.map((section) => (
        <Container key={section.name} className="mt-8 max-w-4xl">
          <div className="flex gap-8">
            <div>
              <h2 className="mb-2">{section.name}</h2>
              <p>{content}</p>
            </div>
            <Infos infos={section.infos} />
          </div>
        </Container>
      ))}
    </Page>
  )
}
