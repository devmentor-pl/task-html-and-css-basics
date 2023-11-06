import React from 'react'
import MenuList from './MenuList';

export const Menu = (props) => {
  const {
    isNavbarOpen
  } = props
  return (
    <>
      <nav className={'nav'} >
        <ul className={`${'nav__menu menu'} ${isNavbarOpen ? `${'nav__hide'}` : `${'nav__block'}`} `}>
          {<MenuList ></MenuList>}
        </ul>
      </nav>
    </>
  )
}


export default Menu
