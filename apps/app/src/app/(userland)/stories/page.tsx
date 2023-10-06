import Container from '@/components/Container'
import Page from '@/components/Page'
import { STORIES } from './data/stories'
import StoryCard from './components/Card'

export default function Stories() {
  return (
    <Page>
      <Container className="max-w-5xl pt-8">
        <h1 className="mb-4">Stories</h1>
        <div className="mt-4 flex items-stretch gap-6">
          {STORIES.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
      </Container>
    </Page>
  )
}
