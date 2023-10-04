import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Container = (props: Props) => {
  const { children, className = '' } = props

  return <div className={`container mx-auto ${className}`}>{children}</div>
}

export default Container
