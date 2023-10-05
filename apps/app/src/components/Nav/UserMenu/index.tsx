'use client'

import React from 'react'
import { UserButton, useUser, SignInButton } from '@clerk/nextjs'
import ToggleMode from '../../ToggleMode'

const UserMenu = () => {
  const { isSignedIn } = useUser()
  return (
    <div className="flex items-center gap-6 ">
      <ToggleMode />
      <div>
        {isSignedIn ? <UserButton afterSignOutUrl="/" /> : <SignInButton />}
      </div>
    </div>
  )
}

export default UserMenu
