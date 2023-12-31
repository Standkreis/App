import Container from '@/components/Container'
import Page from '@/components/Page'
import ScrollToTop from '@/components/ScrollToTop'

export default function About() {
  return (
    <Page>
      <ScrollToTop />
      <Container className="max-w-4xl pt-8">
        <h1 className="mb-4">About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
      </Container>
    </Page>
  )
}
