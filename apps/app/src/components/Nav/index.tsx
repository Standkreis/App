import Link from 'next/link'
import Logo from '../Logo'
import Menu from './Menu'
import UserMenu from './UserMenu'

const Nav = () => {
  return (
    <>
      <div className="bg-paper sticky top-0 z-10 flex w-[100%] items-center justify-between p-4 shadow-md">
        <Link href="/">
          <Logo />
        </Link>
        <div className="absolute left-[50%] hidden translate-x-[-50%] md:block">
          <Menu />
        </div>
        <UserMenu />
      </div>
      <div className="bg-paper fixed bottom-0 z-10 w-screen overflow-hidden p-2 shadow-md md:hidden">
        <Menu />
      </div>
    </>
  )
}

export default Nav
