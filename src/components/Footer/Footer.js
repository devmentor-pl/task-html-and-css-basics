import React from 'react'
import PropTypes from 'prop-types';
import data from '../../../data'


export const Footer = (props) => {
  const {
    className,
    footer,
    ...otherProps
  
  } = props


  return (
   <>

         <div class="footer__text">A free template by</div>
        <img class="footer__photo" src={footer.webscope} alt="webscope"></img>
   </>
  

  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer