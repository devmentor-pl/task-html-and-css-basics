import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const Menu = (props) => {
  const {
    className,
    open,
    ...otherProps
  
  } = props

  return (
    <nav className={'nav'}>
        <ul className={`${'nav__menu'} ${open ? `${'nav__block'}` : `${'nav__hide'}`}`}>
            <li><a href="#features" className={'nav__link'}>The team</a></li>
            <li><a href="#pricing" className={'nav__link'}>Pricing</a></li>
            <li><a href="#features" className={'nav__link'}>Features</a></li>
        </ul>
    </nav>
  )
}

Menu.propTypes = {
  className: PropTypes.string
}

export default Menu
