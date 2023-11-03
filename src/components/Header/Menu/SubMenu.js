import React from 'react'
import MenuItem from './MenuItem';
import MenuList from './MenuList';
import PropTypes from 'prop-types';

export const SubMenu = (props) => {

  const {
    className,
    open,
    content, 
    subcontent
  } = props

  console.log(content)

  const renderSubListItem = (item, i) => {
    return (
      <>
     
        <ul className={'menu__sublist menu__sublist--bottom'}><li className={'menu__item menu__item--parent'}>{item}</li></ul>
      </>
    
    )
  }


  // const renderListItem = (item, i) => {
  //   return (
  //     <>
  //       {<MenuItem keyElement={i} href={item.href} content={item}></MenuItem>}
  //       {/* <li key={i} className={'menu__item '}><a href={`#${item.href}`} className={'menu__link'}>{item.content}</a></li> */}
  //       {item.subcontent ? renderSubListItem(item.subcontent): ''} 
  //     </>
  //   )
  // }

  const renderListItem = (item, i) => {
 
return  (
   <li
                    key={''}
                    className={'menu__item'}
                    // onMouseEnter={this.props.isOpen === true ? this.toggleSubMenu : null}
                    // onMouseEnter={this.props.isOpen === true ? this.toggleSubMenu : null}
                    // onMouseEnter={this.props.keyElement  ? this.toggleSubMenu : null}
               
                >
                   <a href={``} className={'menu__link'}>{item} </a>
</li>
)
     
  }

        
    


  return (
    <ul className={'menu__sublist menu__sublist--bottom'}>
                    
          
        {  content.map((item, i) => {
          return   renderListItem(item, i)
        })
      }

        
      
                        {/* <li className='menu__item'><a>{this.props.subcontent}</a></li> */}
                    </ul>
  )
}

SubMenu.propTypes = {
  open: PropTypes.bool
}

export default SubMenu
