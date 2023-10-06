import React from 'react'
import PropTypes from 'prop-types';

export const Section= (props) => {
  const {
    className,
    children
  } = props

  return (
    <section className={`${className} section`} id={`#${className}`}>
      {children}
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
}

export default Section