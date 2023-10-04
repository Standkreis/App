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
      className={`text-hint flex w-24 flex-col items-center gap-1 ${
        active ? 'text-primary' : 'text-hint'
      }`}
    >
      {icon}
      <span
        className={`family-headline text-current-color text-sm ${
          active ? 'text-primary' : 'text-hint'
        }`}
      >
        {label}
      </span>
    </Link>
  )
}

export default Item
