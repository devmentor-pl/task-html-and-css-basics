import React from 'react'
import PropTypes from 'prop-types';

export const Footer = (props) => {
  const {
    className,
    footer,
    ...otherProps
  } = props

  return (
   <footer className={'footer'}>
    <div class="footer__text">A free template by</div>
    <img class="footer__photo" src={footer.webscope} alt="webscope"></img>
   </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer