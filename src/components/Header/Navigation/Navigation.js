import React, { useState } from 'react'
import { NavbarContext } from '../../context';
import ChocolateHamburger from '../ChocolateHamburger';
import Menu from '../Menu/Menu'
import Menu2 from '../Menu2/Menu2';

export const Navigation = (props) => {

  const {
    content,
    team
  } = props

  console.log(team)

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
        <Menu2 className={'nav'} isNavbarOpen={navbarOpen} navbarOpenFunc={setNavbarOpen} content={content} {...team}></Menu2> 
      </NavbarProvider>
    </>
  )

}


export default Navigation