import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick: () => void
}

const Button = (props: Props) => {
  const { children, onClick } = props

  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
    >
      {children}
    </button>
  )
}

export default Button
