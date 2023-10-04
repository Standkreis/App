'use client'

import React from 'react'

export default function Home() {
  let mode = localStorage.getItem('theme')
  React.useEffect(() => {
    mode = localStorage.getItem('theme')
  }, [])
  console.log(mode)

  const toggleMode = () => {
    if (mode === 'dark') {
      console.log('mode', mode, 'should toggle to light')
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    }

    if (mode === 'light') {
      console.log('mode', mode, 'should toggle to dark')
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
  }

  return <button onClick={toggleMode}>Toggle Mode</button>
}
