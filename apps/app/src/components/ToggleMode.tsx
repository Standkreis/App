'use client'

import React, { useEffect, useState } from 'react'
import Button from './Button'
import { useTheme } from 'next-themes'

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
    <Button className="my-6" onClick={onClick}>
      ToggleMode
    </Button>
  )
}

export default ToggleMode
