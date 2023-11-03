import React, { useState } from 'react'
import MenuItem from './MenuItem';
import MenuItem2 from './MenuItem2';
import PropTypes from 'prop-types';

export const SubMenuContext = React.createContext();

export const MenuList = (props) => {
  const {
    open,
    subcontent,
    className,
    keyElement,
    value,
    href
  } = props


  const [subMenuOpen, setsubMenuOpen] = useState(false);

  const handleToggle = () => {
    setsubMenuOpen(!subMenuOpen);
  }

  const renderListItem = (item, i) => {
    return (
      <>
        <MenuItem keyElement={i} href={item.href} content={item.content || item.subcontent} className={item.className} isOpen={item.isOpen} onMouseEnter={handleToggle} open={subMenuOpen} openFunc={setsubMenuOpen} subcontent={item.subcontent}></MenuItem>
      </>
    )
  }

  return (
    <>
    <SubMenuContext.Provider value={{ subMenuOpen, setsubMenuOpen }}>
      <ul className={className} >{

        value.map((item, i) => {
          return renderListItem(item, i)
        })

      }

      </ul>
      </SubMenuContext.Provider>
    </>



  )
}

MenuList.propTypes = {
  className: PropTypes.string,
  keyElement: PropTypes.number,
  content: PropTypes.string,
  href: PropTypes.string

}

export default MenuList
