import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  className?: string
}

const Container = (props: Props) => {
  const { children, className = '' } = props

  return (
    <div className={`container md:mx-auto md:px-0 ${className}`}>
      {children}
    </div>
  )
}

export default Container
