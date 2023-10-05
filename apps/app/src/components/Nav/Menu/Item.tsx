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

  const active = pathname === path

  return (
    <Link
      href={path}
      className={`flex w-screen flex-col items-center gap-1 rounded-lg border-none bg-slate-500 px-1 py-1 transition ease-in-out sm:w-24 sm:flex-grow-0 sm:px-4 ${
        active
          ? '!bg-primary-main hover:!bg-primary-dark !text-white'
          : 'text-hint hover:!text-primary hover:bg-default bg-transparent '
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
