import React from 'react'
import PropTypes from 'prop-types';
import data from '../../../data';
import { HeaderSection } from './HeaderSection/HeaderSection';

export const Header = (props) => {
  const {
    className,
    header,
    ...otherProps
  
  } = props


  return (
    <>
       <HeaderSection {...data}></HeaderSection>
    </>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header