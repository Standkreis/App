import Container from '@/components/Container'
import Page from '@/components/Page'
import ToggleMode from '@/components/ToggleMode'

export default function Home() {
  return (
    <Page>
      <Container>
        <div className="container mx-auto ">
          <h1>Standkreis</h1>
          <h2>Standkreis</h2>
          <h3>Standkreis</h3>
          <h4>Standkreis</h4>
          <h5>Standkreis</h5>
          <h6>Standkreis</h6>

          <p className="font-weight-100">
            Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
            Konsonantien leben die Blindtexte.
          </p>

          <blockquote>
            Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile
            in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion
            werden die Blindtexte beherrscht – ein geradezu unorthographisches
            Leben.
          </blockquote>

          <ToggleMode />

          <div className="bg-paper mx-auto flex max-w-sm items-center space-x-4 rounded-xl p-6 shadow-lg ">
            <div>
              <h5>ChitChat</h5>
              <p className="!text-hint font-weight-100">
                You have a new message!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Page>
  )
}
