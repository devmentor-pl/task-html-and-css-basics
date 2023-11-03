import React from 'react'
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

export const MenuList = (props) => {
    const {
        open,
        className,
        keyElement,
        value,
        href
      } = props

      const renderSubListItem = (item, i) => {
        return (
          <>
         <MenuList className={'menu__sublist menu__sublist--bottom'} value={<MenuItem className={'menu__item menu__item--parent'} content={item}></MenuItem>}></MenuList>
            {/* <ul className={'menu__sublist menu__sublist--bottom'}><li className={'menu__item menu__item--parent'}>{item}</li></ul> */}
          </>
        
        )
      }

    
  
      const renderListItem = (item, i) => {
       
        return (
          <>
       
          <MenuItem keyElement={i} href={item.href} content={item.content || item.subcontent}  className={item.className} isOpen={item.isOpen} subcontent={item.subcontent}></MenuItem>
          {/* {item.content && !item.subcontent ? <MenuItem keyElement={i} href={item.href} content={item.content} subMenuOpen={false}></MenuItem> : ''} */}
            {/* {item.content && item.subcontent?  <MenuItem keyElement={i}  content={item.content} subcontent={item.subcontent} className={'menu__item--parent'}  subMenuOpen={true}></MenuItem>: ''}   */}
            {/* {item.subcontent ? <MenuItem keyElement={i} href={item.href} content={item.subcontent}   subMenuOpen={true}></MenuItem>: ''}   */}
            {/* <li key={i} className={'menu__item '}><a href={`#${item.href}`} className={'menu__link'}>{item.content}</a></li> */}
            {/* {item.subcontent ? renderSubListItem(item.subcontent): ''}  */}
          </>
        )
      }
    return (
      <>
         {console.log(typeof value)}

        
          <ul className={className}>{
          
            value.map((item, i) => {
            return   renderListItem(item, i)
          })
   
          }
          
          </ul>
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
