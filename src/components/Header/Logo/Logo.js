import React from 'react'

import PropTypes from 'prop-types';
import Typography from '../../Typography';


export const Logo = (props) => {
  const {
    className,
  } = props

  return (
    <h1 className={className} alt="logo"><img src={props.logo}></img></h1>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
}


export default Logo