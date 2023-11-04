import React, { useState } from 'react'
import { SubMenuContext } from '../../context';
import MenuList from './MenuList';
import PropTypes from 'prop-types';

export const Menu = (props) => {

  const {
    className,
    isNavbarOpen,
    navbarOpenFunc,
    content,
  } = props

  const { Provider: SubMenuProvider } = SubMenuContext;
  const [subMenuOpen, setsubMenuOpen] = useState(false);

  return (
    <SubMenuProvider value={{ subMenuOpen, setsubMenuOpen }}>
      <nav className={className}>
        <MenuList content={content} className={`${'nav__menu menu__list'} ${isNavbarOpen ? `${'nav__hide'}` : `${'nav__block'}`}`}></MenuList>
      </nav>
    </SubMenuProvider>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
  isNavbarOpen: PropTypes.bool,
  navbarOpenFunc: PropTypes.func,
  content: PropTypes.object

}

export default Menu
