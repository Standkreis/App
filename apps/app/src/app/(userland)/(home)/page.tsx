import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Page from '@/components/Page'

export default function Home() {
  return (
    <Page>
      <Hero />
      <Container className="max-w-4xl py-12">
        <h1 className="mb-4">🎯 Mission</h1>
        <p>
          Standkreis is an attempt to reshape our ecological, social and
          economic systems towards a more sustainable future. Following the
          principles of Permaculture we aspire to turn small pieces of dead land
          into flourishing ecosystems for plants, animals and people.
        </p>
      </Container>
    </Page>
  )
}
