'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

type Props = {
  label: string
  icon: ReactNode
  path: string
}

const Item = (props: Props) => {
  const { label, icon, path } = props
  const pathname = usePathname()

  const isHome = path === '/'
  // Need exact check at home and include for other routes
  const active = isHome ? pathname === '/' : pathname.includes(path)

  return (
    <Link
      href={path}
      className={`flex w-screen flex-col items-center gap-1 rounded-lg border-none px-1 py-1 transition ease-in-out md:w-24 md:flex-grow-0 md:px-4 ${
        active
          ? '!bg-primary-main hover:!bg-primary-dark !text-white'
          : 'text-hint hover:!text-paragraph hover:bg-default bg-transparent'
      }`}
    >
      {icon}
      <span className={`family-headline text-sm !text-current sm:text-base`}>
        {label}
      </span>
    </Link>
  )
}

export default Item
