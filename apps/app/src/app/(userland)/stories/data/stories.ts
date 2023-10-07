export type Story = {
  id: number
  slug: string
  title: string
  description: string
  content: string
  image: string
  date: string
  tags: string[]
  creatorObject: {
    name: string
    avatar: string
  }
}
