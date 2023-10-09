import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Page from '@/components/Page'
import StoryCard from '../stories/components/Card'
import ScrollToTop from '@/components/ScrollToTop'
import { allStories } from 'contentlayer/generated'

export default function Home() {
  return (
    <Page>
      <ScrollToTop />
      <Hero />
      <Container className="max-w-5xl pb-6 pt-12">
        <h1 className="mb-4">🎯 Mission</h1>
        <p>
          Standkreis is an attempt to reshape our ecological, social and
          economic systems towards a more sustainable future. Following the
          principles of Permaculture we aspire to turn small pieces of dead land
          into flourishing ecosystems for plants, animals and people.
        </p>
      </Container>
      <Container className="max-w-5xl pb-24 pt-6">
        <h1 className="mb-4">📢 Stories</h1>
        <div className="mt-4 flex flex-wrap gap-6 md:flex-nowrap">
          {allStories.map((story: any) => (
            <StoryCard key={story.slug} {...story} />
          ))}
        </div>
      </Container>
    </Page>
  )
}
