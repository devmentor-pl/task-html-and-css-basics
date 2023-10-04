import React from 'react'
import PropTypes from 'prop-types';
import { Features } from './Features'
import Typography from '../Typography/Typography';
import Websites from './Websites'
import Adverb from './Adverb'


export const Main = (props) => {
  const {
    className,

  } = props


  return (
    <main className={className}>
       <Features {...props} headline={<Typography children={props.features.headline} variant="h2" className={'features__header'}></Typography>}></Features> 
       <Websites {...props}></Websites>
       <Adverb {...props} headline={<Typography children={props.adverb.headline} variant="h3" className={'adverb__text-header'}></Typography>}></Adverb>
       {/* <Pricing {...data}></Pricing>
       <Team {...data}></Team>   */}
    </main>
  )
}

Main.propTypes = {
  className: PropTypes.string
}

export default Main