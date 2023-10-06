import Container from '@/components/Container'
import Page from '@/components/Page'
import { STORIES } from './data/stories'
import StoryCard from './components/Card'
import ScrollToTop from '@/components/ScrollToTop'
import { allStories } from 'contentlayer/generated'

export default function Stories() {
  return (
    <Page>
      <ScrollToTop />
      <Container className="max-w-5xl pt-8">
        <h1 className="mb-4">Stories</h1>
        <div className="mt-4 flex items-stretch gap-6">
          {allStories.map((story: any) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
      </Container>
    </Page>
  )
}
