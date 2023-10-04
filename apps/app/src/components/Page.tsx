import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Page = (props: Props) => {
  const { children, className } = props

  return (
    <div className={`bg-default min-h-screen py-6 ${className}`}>
      {children}
    </div>
  )
}

export default Page
