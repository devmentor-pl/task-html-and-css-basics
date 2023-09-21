import React from 'react'
import PropTypes from 'prop-types'
import data from '../../../data'
import { Features } from '../Features'
import Websites from '../Websites/Websites'

export const Main = (props) => {
  const {
    className,
    header,
    ...otherProps
  
  } = props


  return (
    <>
       <Features {...data}></Features>
       <Websites {...data}></Websites>
    </>
  )
}

Main.propTypes = {
  className: PropTypes.string
}

export default Main