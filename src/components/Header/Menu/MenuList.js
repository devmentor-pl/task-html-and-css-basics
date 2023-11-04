import React, { useContext, } from 'react'
import { SubMenuContext } from '../../context';
import MenuItem from './MenuItem';

import PropTypes from 'prop-types';

export const MenuList = (props) => {
  const {
    className,
    content,
  } = props

  const {subMenuOpen, setsubMenuOpen} = useContext(SubMenuContext);

  const handleToggle = () => {
    setsubMenuOpen(!subMenuOpen);
  }

  const renderListItem = (item, i) => {
    return (
      <>
        <MenuItem keyElement={i} href={item.href} content={item.firstItem || item.secondItem} className={item.className} isOpen={item.isOpen} onMouseEnter={handleToggle} open={subMenuOpen} openFunc={setsubMenuOpen} subcontent={item.secondItem}></MenuItem>
      </>
    )
  }

  return (
    <>
      <ul className={className} >{
        content.map((item, i) => {
          return renderListItem(item, i)
        })
      }
      </ul>
    </>
  )
}

MenuList.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
}

export default MenuList
