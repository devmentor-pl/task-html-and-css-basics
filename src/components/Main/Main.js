import React from 'react'
import PropTypes from 'prop-types';
import data from '../../../data'
import { Features } from './Features'
import Websites from './Websites'
import Adverb from './Adverb'
import Pricing from './Pricing/Prices';
import { Team } from './Team'



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
       <Pricing {...data}></Pricing>
       <Team {...data}></Team>
    </>
  )
}

Main.propTypes = {
  className: PropTypes.string
}

export default Main