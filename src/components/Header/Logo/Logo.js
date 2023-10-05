import React from 'react'

import PropTypes from 'prop-types';
import Typography from '../../Typography';


export const Logo = (props) => {
  const {
    className,
  } = props

  return (
    <Typography
      variant="h1"
      className={className}
      children={
        <img src={props.logo} alt="logo">
        </img>
      }>
    </Typography>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
}


export default Logo