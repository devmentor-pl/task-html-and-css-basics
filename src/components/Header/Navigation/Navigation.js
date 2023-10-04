import React, { useState } from 'react'
import ChocolateHamburger from '../ChocolateHamburger/ChocolateHamburger';
import Menu from '../Menu/Menu';

export const NavbarContext = React.createContext();

export const Navigation = () => {

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
        <Menu open={navbarOpen} openFunc={setNavbarOpen}></Menu>
      </NavbarContext.Provider>
    </>
  )
}


export default Navigation