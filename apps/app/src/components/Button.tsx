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
      className={`rounded-xl bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
