import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  onClick?: () => void
  className?: string
}

const Button = (props: Props) => {
  const { children, onClick, className } = props

  return (
    <button
      onClick={onClick}
      className={`bg-primary-main hover:bg-primary-dark rounded-xl px-4 py-2 text-white transition ease-in-out sm:px-8 sm:py-3 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
