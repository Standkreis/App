import { ReactNode } from 'react'

type ButtonColor = 'primary' | 'secondary' | 'light' | 'medium'

type Props = {
  children?: ReactNode
  onClick?: () => void
  className?: string
  color?: ButtonColor
}

const Button = (props: Props) => {
  const { children, onClick, className, color = 'primary' } = props

  const colors = {
    primary: {
      bg: 'bg-primary-main',
      bgHover: 'hover:bg-primary-dark',
      text: 'text-white',
    },
    secondary: {
      bg: 'bg-contrast',
      bgHover: 'bg-contrast',
      text: 'text-contrast',
    },
    light: {
      bg: 'bg-default',
      bgHover: 'hover:bg-light',
      text: 'text-headline',
    },
    medium: {
      bg: '',
      bgHover: 'hover:bg-primary-dark',
      text: '',
    },
  }

  return (
    <button
      onClick={onClick}
      className={`rounded-xl p-3 transition ease-in-out ${colors[color].text} ${colors[color].bg} ${colors[color].bgHover} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
