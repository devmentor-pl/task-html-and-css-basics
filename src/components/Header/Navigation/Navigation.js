import React, { useState } from 'react'
import { NavbarContext } from '../../context';
import ChocolateHamburger from '../ChocolateHamburger';

import Menu from '../Menu/Menu';

export const Navigation = () => {


  const { Provider: NavbarProvider } = NavbarContext;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <>
      <NavbarProvider value={{ navbarOpen, setNavbarOpen }}>
        <button onClick={handleToggle} className={'hamburger'}>
          <ChocolateHamburger isNavbarOpen={navbarOpen} openFunc={setNavbarOpen} span={9} />
        </button>
        <Menu className={'nav'} isNavbarOpen={navbarOpen} navbarOpenFunc={setNavbarOpen} ></Menu> 
      </NavbarProvider>
    </>
  )

}


export default Navigation