import About from '@/components/Icons/About'
import Ecosystem from '@/components/Icons/Ecosystem'
import Home from '@/components/Icons/Home'
import Shop from '@/components/Icons/Shop'
import Stories from '@/components/Icons/Stories'

export const config = {
  user: {
    isLoggedIn: false,
    name: {
      first: 'Sven',
      last: 'Reiser',
      full: 'Sven Reiser',
    },
    avatar: 'https://avatars.githubusercontent.com/u/50661561?v=4',
  },
  menus: {
    main: [
      {
        id: 'home',
        label: 'Home',
        icon: <Home />,
        path: '/',
      },
      {
        id: 'shop',
        label: 'Shop',
        icon: <Shop />,
        path: '/shop',
      },
      {
        id: 'stories',
        label: 'Stories',
        icon: <Stories />,
        path: '/stories',
      },
      {
        id: 'species',
        label: 'Species',
        icon: <Ecosystem />,
        path: '/ecosystem',
      },
      {
        id: 'about',
        label: 'About',
        icon: <About />,
        path: '/about',
      },
    ],
  },
}
