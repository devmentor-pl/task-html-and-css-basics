import React from 'react'

import PropTypes from 'prop-types';
import HeaderSection from './HeaderSection';


export const Header = (props) => {
  const {
    className,
    ...header
  } = props

  return (
    <header className={className}>
      <HeaderSection {...header}></HeaderSection>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  header: PropTypes.object
}


export default Header