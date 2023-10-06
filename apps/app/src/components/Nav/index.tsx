import Link from 'next/link'
import Logo from '../Logo'
import Menu from './Menu'
import UserMenu from './UserMenu'

const Nav = () => {
  return (
    <>
      <div className="bg-paper sticky top-0 z-10 flex items-center justify-between p-4 shadow-sm">
        <Link href="">
          <Logo />
        </Link>
        <div className="absolute left-[50%] hidden translate-x-[-50%] sm:block">
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
