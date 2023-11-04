import React, { useState } from 'react'
import { NavbarContext } from '../../context';
import ChocolateHamburger from '../ChocolateHamburger';
import Menu from '../Menu/Menu';

export const Navigation = (props) => {

  const {
    content
  } = props

  const { Provider: NavbarProvider } = NavbarContext;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <>
      <NavbarProvider value={{ navbarOpen, setNavbarOpen }}>
        <button onClick={handleToggle} className={'hamburger'}>
          <ChocolateHamburger isNavbarOpenopen={navbarOpen} openFunc={setNavbarOpen} span={9} />
         
        </button>
        <Menu className={'nav'} isNavbarOpen={navbarOpen} navbarOpenFunc={setNavbarOpen} content={content}></Menu>
      </NavbarProvider>
    </>
  )

}


export default Navigation