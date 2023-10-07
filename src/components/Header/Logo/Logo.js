import React from 'react'
import PropTypes from 'prop-types';

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