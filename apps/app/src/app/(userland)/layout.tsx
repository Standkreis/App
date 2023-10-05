import Nav from '@/components/Nav'

type Props = {
  children: React.ReactNode
}

export default function UserLayout({ children }: Props) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}
