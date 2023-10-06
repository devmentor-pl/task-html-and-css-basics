import React from 'react'
import PropTypes from 'prop-types';

export const Footer = (props) => {
  const {
    className,
    webscope,
  } = props

  return (
   <footer className={className}>
    <div className={"footer__text"}>A free template by</div>
    <img className={"footer__photo"} src={webscope} alt="webscope"></img>
   </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer