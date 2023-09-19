import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ChocolateHamburger } from '../ChocolateHamburger'
import Menu from '../Menu'


export const NavbarContext = React.createContext();
export const ChocolateHamburgerContext = React.createContext()

export const Navigation = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const [navbarOpen, setNavbarOpen] = useState(false);
  
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <>
      <NavbarContext.Provider value={{ navbarOpen, setNavbarOpen }}>
        <button onClick={handleToggle} className={'hamburger'}>
          <ChocolateHamburger open={navbarOpen} openFunc={setNavbarOpen} span={9}/>
        </button>
        <Menu open={navbarOpen} openFunc={setNavbarOpen}></Menu>
      </NavbarContext.Provider>
    </>
)
}

Navigation.propTypes = {
  className: PropTypes.string
}

export default Navigation
