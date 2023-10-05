import React, { useState } from 'react'
import ChocolateHamburger from '../ChocolateHamburger';
import Menu from '../Menu/Menu';

export const NavbarContext = React.createContext();

export const Navigation = (props) => {

  const {
    content
  } = props

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <>
      <NavbarContext.Provider value={{ navbarOpen, setNavbarOpen }}>
        <button onClick={handleToggle} className={'hamburger'}>
          <ChocolateHamburger open={navbarOpen} openFunc={setNavbarOpen} span={9} />
        </button>
        <Menu className={'nav'} open={navbarOpen} openFunc={setNavbarOpen} content={content}></Menu>
      </NavbarContext.Provider>
    </>
  )

}


export default Navigation