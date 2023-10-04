import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Container = (props: Props) => {
  const { children } = props

  return <div className="container mx-auto">{children}</div>
}

export default Container
