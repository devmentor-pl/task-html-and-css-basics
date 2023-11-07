import React from 'react'
import MenuList2 from './MenuList2';

export const Menu = (props) => {
  const {
    isNavbarOpen
  } = props
  return (
    <>
      <nav className={'nav'} >
        <ul className={`${'nav__menu menu'} ${isNavbarOpen ? `${'nav__hide'}` : `${'nav__block'}`} `}>
          {<MenuList2 ></MenuList2>}
        </ul>
      </nav>
    </>
  )
}


export default Menu
