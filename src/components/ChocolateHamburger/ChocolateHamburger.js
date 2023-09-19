import React from 'react'
import PropTypes from 'prop-types'


export const NavbarContext = React.createContext();
export const ChocolateHamburger = (props) => {
  const {
    className,
    onClick,
    span,
    ...otherProps
  } = props

  // const renderSpan = (span) => {
  //   return (
  //     <ul>
  //       {span.map(
  //         el =>
  //         <li 
  //         key={el.id}
  //         >
  //           {el}
  //         </li>
  //         )
  //       }
  //     </ul>
  //   )
  // }


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