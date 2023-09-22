import React from 'react'
import PropTypes from 'prop-types';

export const NavbarContext = React.createContext();
export const ChocolateHamburger = (props) => {
  const {
    className,
    onClick,
    span,
    ...otherProps
  } = props

  const spanElement = (spanElement) => {
    const numberOfElements = spanElement;
    const elements = [];
    for (let i = 1; i <= numberOfElements; i++) {
      elements.push(<span key={i}></span>);
    }
    return (
      <>
        {elements}
      </>
    );
  }

  if (open) {
    return (
      <div className={`${"hamburger__icon open"}`}>
        {spanElement(props.span)}
      </div>
    )

  } else if (!open) {
    return (
      <div className={`${"hamburger__icon"}`}>
        {spanElement(props.span)}
      </div>
    )
  }
}

ChocolateHamburger.propTypes = {
  className: PropTypes.string
}

export default ChocolateHamburger