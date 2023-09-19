import logo from '../../src/images/logo.png';
import ceo from '../../src/images/ceo.png';
import cfo from '../../src/images/cfo.png';
import cto from '../../src/images/cto.png';
import React, { useState } from 'react'
import PropTypes from 'prop-types'
// export const Images = (path, container) => {
//     const div = document.createElement('div')
//     div.className='team__photo'
//     const imageElement = document.createElement('img')
//     imageElement.src = path;
//     document.body.appendChild(imageElement)
 
//     return div
// }

// Images(logo)

export const Images = (props) => {
    const {
      className,
    team,
      ...otherProps
    
    } = props
  
    return (
        console.log(team)
     
    )
  }
  
  Images.propTypes = {
    className: PropTypes.string
  }
  
  export default Images




