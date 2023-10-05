import Home from '@/components/Icons/Home'
import { config } from '@/config'
import React from 'react'
import Item from './Item'

const Menu = () => {
  return (
    <div className="flex">
      {config.menus.main.map(({ id, label, icon, path }) => (
        <Item key={id} label={label} icon={icon} path={path} />
      ))}
    </div>
  )
}

export default Menu
