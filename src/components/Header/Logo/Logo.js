import React from 'react'

import PropTypes from 'prop-types';
import Typography from '../../Typography/Typography';


export const Logo = (props) => {
  const {
    className,
    logo
  } = props

  return (
    <Typography variant="h1" className={className}>
         <img src={logo} alt="logo">
          </img>
    </Typography>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  header: PropTypes.object
}


export default Logo