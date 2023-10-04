'use client'

import { ReactNode, useEffect, useState } from 'react'
import Button from './Button'
import { useTheme } from 'next-themes'
import Sun from './Icons/Sun'
import Moon from './Icons/Moon'

const ToggleMode = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const onClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button className="text-primary" onClick={onClick}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
}

export default ToggleMode
