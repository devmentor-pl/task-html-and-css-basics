import React from 'react'
import PropTypes from 'prop-types'


export const Typography = (props) => {
  const {
    className,
    children,
    variant,
    color,
    ...otherProps
  } = props


  const colorFont = color


if (variant === 'h1') {
      return (
          <h1
          className={`${className ? ` ${className}` : ''}`}
          style={{ color: colorFont }}
          {...otherProps}
      >
          {children}
        </h1>
      )
    } else if (variant === 'h2') {
      return (
        <h2
          className={`${className ? ` ${className}` : ''}`}
          style={{ color: colorFont}}
          {...otherProps}
      >
          {children}
        </h2>
      )
    } else if (variant === 'h3') {
      return (
        <h3
          className={`${className ? ` ${className}` : ''}`}
          style={{ color: colorFont }}
          {...otherProps}
      >
          {children}
        </h3>
      )
    } else if (variant === 'h4') {
      return (
        <h4
          className={`${className ? ` ${className}` : ''}`}
          style={{ color: colorFont }}
          {...otherProps}
      >
          {children}
        </h4>
      )
    } else if (variant === 'h5') {
      return (
        <h4
          className={`${className ? ` ${className}` : ''}`}
          style={{ color: colorFont }}
          {...otherProps}
      >
          {children}
        </h4>
      )}
      else if (variant === 'p') {
      return (
        <p
          className={`${className ? ` ${className}` : ''}`}
          style={{ color: colorFont }}
          {...otherProps}
      >
          {children}
        </p>
      )
    }else if(variant === 'button') {
      return (
        <button
          className={`${className ? ` ${className}` : ''}`}
          style={{ color: colorFont }}
          {...otherProps}
      >
          {children}
        </button>
      )
    }
  
}

Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['h1','h2','h3','h4','p','button'])
}

export default Typography
