import React, { Component } from 'react';
import MenuSubList from './MenuSubList';
import SubMenu from './SubMenu';
import MenuList from './MenuList';
import PropTypes from 'prop-types';

export const MenuItem2 = (props) => {
    const {
        className,
        keyElement,
        open,
        onMouseEnter,
        content, 
        subcontent
      } = props

    const handleToggle = () => {
        setsubMenuOpen(!subMenuOpen);
      }

    return (
            <>
  
                <li
                    key={keyElement}
                    className={'menu__item'}
                    // onMouseEnter={this.props.isOpen === true ? this.toggleSubMenu : null}
                    onMouseEnter={onMouseEnter}
                   
               
                >
                       <a href={''} className={'menu__link'}>{content} </a>
                 {open === true && (

<>


<SubMenu content={content}></SubMenu>   
</>



)}
   
                   
                </li>
             
            </>

        )
    }


MenuItem2.propTypes = {
    className: PropTypes.string,
    keyElement: PropTypes.number,
    content: PropTypes.string,
    href: PropTypes.string

}

export default MenuItem2
