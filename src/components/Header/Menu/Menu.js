import React from 'react'
import MenuItem from './MenuItem';
import MenuList from './MenuList';
import PropTypes from 'prop-types';

export const Menu = (props) => {

  const {
    className,
    open,
    content, 
    subcontent
  } = props

  const renderSubListItem = (item, i) => {
    return (
      <>
     
        <ul className={'menu__sublist menu__sublist--bottom'}><li className={'menu__item menu__item--parent'}>{item}</li></ul>
      </>
    
    )
  }


  const renderListItem = (item, i) => {
    return (
      <>
        <MenuItem keyElement={i} href={item.href} content={item.content}></MenuItem>
        {/* <li key={i} className={'menu__item '}><a href={`#${item.href}`} className={'menu__link'}>{item.content}</a></li> */}
        {item.subcontent ? renderSubListItem(item.subcontent): ''} 
      </>
    )
  }

  return (
    <nav className={className}>
      <MenuList value={content} className={`${'nav__menu menu__list'} ${open ? `${'nav__hide'}` : `${'nav__block'}`}`}></MenuList>
      {/* <MenuList ifOpen={open} value={content} className={`${'nav__menu menu__list'} ${open ? `${'nav__hide'}` : `${'nav__block'}`}`}></MenuList> */}
      
      {/* <ul className={`${'nav__menu menu__list'} ${open ? `${'nav__hide'}` : `${'nav__block'}`}`}>
        {content.map((item, i) => {
          return renderListItem(item, i)
        })}
        
      </ul> */}
    </nav>
  )
}

Menu.propTypes = {
  open: PropTypes.bool
}

export default Menu
