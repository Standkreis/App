import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Page = (props: Props) => {
  const { children, className } = props

  return (
    <div
      style={{
        backgroundImage:
          'radial-gradient(50% 50% at 50% 50%, #185D67 0%, #1B3134 100%)',
      }}
      className={`min-h-screen px-4 xl:px-0 ${className}`}
    >
      {children}
    </div>
  )
}

export default Page
