import React from 'react'

type Props = {
  color?: 'dark'
  label: string
}

const Chip = (props: Props) => {
  const { color = 'dark', label } = props

  const colors = {
    dark: {
      bg: 'bg-paper',
      text: 'text-headline',
    },
  }

  return (
    <div className={`rounded-lg px-2 py-1 ${colors[color].bg}`}>
      <span className={`font-bold ${colors[color].text}`}>{label}</span>
    </div>
  )
}

export default Chip
