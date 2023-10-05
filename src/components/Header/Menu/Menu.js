import React from 'react'
import PropTypes from 'prop-types';

export const Menu = (props) => {

  const {
    className,
    open,
    content
  } = props

  const renderListItem = (item, i) => {
    return (
    <li key={i}><a href={`#${item.href}`} className={'nav__link'}>{item.content}</a></li>
    )
  }

  return (
    <nav className={className}>
        <ul className={`${'nav__menu'} ${open ? `${'nav__hide'}` : `${'nav__block'}`}`}>
        {content.map((item, i) => {
          return renderListItem(item, i)
        })}  
        </ul>
    </nav>
  )
}

Menu.propTypes = {
  open: PropTypes.bool
}

export default Menu
