import React from 'react'

import { config } from '@/config'

import ToggleMode from '../ToggleMode'
import Button from '../Button'
import Logo from '../Logo'
import Menu from './Menu'
import { UserButton } from '@clerk/nextjs'
import UserMenu from './UserMenu'

const Nav = () => {
  return (
    <>
      <div className="bg-paper sticky top-0 flex items-center justify-between p-4 shadow-sm">
        <Logo />
        <div className="hidden sm:block">
          <Menu />
        </div>
        <UserMenu />
      </div>
      <div className="bg-paper fixed bottom-0 w-screen p-2 sm:hidden">
        <Menu />
      </div>
    </>
  )
}

export default Nav
