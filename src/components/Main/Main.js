import React from 'react'
import PropTypes from 'prop-types';
import Section from '../Section';
import { Features } from './Features'
import Typography from '../Typography/Typography';
import Websites from './Websites'
import Adverb from './Adverb'
import Pricing from './Pricing'
import Team from './Team'
import Review from './Review';

export const Main = (props) => {
  const {
    className,
  } = props

  return (
    <main className={className}>
    
      <Features {...props} className={'features'}></Features>
      <Websites {...props} 
        className={'websites'}></Websites>
      <Adverb {...props}
        className={'adverb'}
        headline={<Typography children={props.adverb.headline} variant="h3" className={'adverb__text-header'}></Typography>}
        text={<Typography children={props.adverb.text} variant="p" className={'adverb__text-description'}></Typography>}
      ></Adverb>
      <Pricing
       {...props}
      className={'pricing'}
     
      ></Pricing>
      <Review className={'review'}></Review>
      <Team {...props} className={'team'}></Team>
    </main>
  )
}

Main.propTypes = {
  className: PropTypes.string
}

export default Main