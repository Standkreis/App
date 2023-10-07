import Container from '@/components/Container'
import Page from '@/components/Page'
import Card from './components/Card'
import ScrollToTop from '@/components/ScrollToTop'
import { allStories } from 'contentlayer/generated'

export default function Stories() {
  return (
    <Page>
      <ScrollToTop />
      <Container className="max-w-5xl pb-24 pt-12">
        <h1 className="mb-4">Stories</h1>
        <div className="mt-4 flex flex-wrap gap-6 md:flex-nowrap">
          {allStories.map((story: any) => (
            <Card key={story.id} {...story} />
          ))}
        </div>
      </Container>
    </Page>
  )
}
