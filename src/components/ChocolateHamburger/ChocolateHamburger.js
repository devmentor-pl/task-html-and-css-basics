import React, { useState } from 'react'
import PropTypes from 'prop-types'





export const NavbarContext = React.createContext();
export const ChocolateHamburger = (props) => {
  const {
    className,
    onClick,
    ...otherProps
  } = props

if(open) {
return (
  <div className={`${"hamburger__icon open"}`}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
)
   
} else if(!open){

  return (
    <div className={`${"hamburger__icon"}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
   

  
}

ChocolateHamburger.propTypes = {
  className: PropTypes.string
}

export default ChocolateHamburger