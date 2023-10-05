import React from 'react'

import { config } from '@/config'

import ToggleMode from '../ToggleMode'
import Button from '../Button'
import Logo from '../Logo'
import Menu from './Menu'
import UserMenu from './UserMenu'

const Nav = () => {
  return (
    <div className="bg-paper sticky top-0 flex items-center justify-between p-4 shadow-sm">
      <Logo />
      <Menu />
      {config.user.isLoggedIn ? (
        <UserMenu />
      ) : (
        <div className="flex items-center gap-6">
          <ToggleMode />
          <Button>Sign in</Button>
        </div>
      )}
    </div>
  )
}

export default Nav
