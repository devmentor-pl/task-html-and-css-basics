import React from 'react'
import PropTypes from 'prop-types'
import data from '../../../data'
import { Features } from '../Features'
import Websites from '../Websites/Websites'
import Adverb from '../Adverb/Adverb'
import { Team } from '../Team'



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
       <Adverb {...data}></Adverb>
       <Team {...data}></Team>
     
    </>
  )
}

Main.propTypes = {
  className: PropTypes.string
}

export default Main