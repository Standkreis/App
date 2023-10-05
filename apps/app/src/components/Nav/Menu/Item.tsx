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
  console.log(path)

  return (
    <Link
      href={path}
      className={`flex w-24 flex-col items-center gap-1 rounded-lg border-none bg-slate-500 px-4 py-1 transition ease-in-out ${
        active
          ? '!bg-primary-main text-white hover:!text-white'
          : 'text-hint hover:!text-paragraph bg-transparent'
      }`}
    >
      {icon}
      <span className={`family-headline text-base !text-current`}>{label}</span>
    </Link>
  )
}

export default Item
