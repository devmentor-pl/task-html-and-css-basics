import React from 'react'
import MenuList from './MenuList';

export const Menu= () => {
  return (
    <>
      <nav className={'nav'} >
        {<MenuList ></MenuList>}
      </nav>
    </>
  )
}


export default Menu
