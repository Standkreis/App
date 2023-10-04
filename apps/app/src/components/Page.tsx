import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Page = (props: Props) => {
  const { children } = props

  return <div className="bg-default min-h-screen pt-6">{children}</div>
}

export default Page
