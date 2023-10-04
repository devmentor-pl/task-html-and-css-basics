import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const ChocolateHamburger = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const {
    open,
    onFunc,
    span
  } = props

  const spanElement = (spanElement) => {
    const numberOfElements = spanElement;
    const elements = [];

    for (let i = 1; i <= numberOfElements; i++) {
      elements.push(<div><span key={i}></span></div>);
    }
    return (
      <>
        {elements}
      </>
    );
  }

  return (
    <div className={`hamburger__icon${isOpen ? '-close' : '-open'}`} onClick={toggleMenu}>
      {spanElement(props.span)}
    </div>
  )
  
}

ChocolateHamburger.propTypes = {
  open: PropTypes.bool,
  span: PropTypes.number
}

export default ChocolateHamburger