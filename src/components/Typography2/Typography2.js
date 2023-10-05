import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Typography2 = (props) => {
  const {
    className,
    children,
    variant,
    ...otherProps
  } = props

  const variantClass = classes[variant]

  return (
    <span
      className={`${classes.root}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}`}
      {...otherProps}
    >
      {children}
    </span>
  )
}

Typography2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['h1', 'h2', 'button'])
}

export default Typography2
