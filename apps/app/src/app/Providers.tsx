'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Providers = (props: Props) => {
  const { children } = props

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default Providers
