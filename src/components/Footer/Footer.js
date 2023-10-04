import React from 'react'
import PropTypes from 'prop-types';

export const Footer = (props) => {
  const {
    className,
    webscope,
    ...otherProps
  } = props

  return (
   <footer className={className}>
    <div class="footer__text">A free template by</div>
    <img class="footer__photo" src={webscope} alt="webscope"></img>
   </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer