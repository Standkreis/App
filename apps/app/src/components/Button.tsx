import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick: () => void
  className?: string
}

const Button = (props: Props) => {
  const { children, onClick, className } = props

  return (
    <button
      onClick={onClick}
      className={`transition ease-in-out rounded-xl bg-primary-main px-4 py-2 text-white hover:bg-primary-dark sm:px-8 sm:py-3 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
