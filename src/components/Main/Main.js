import React from 'react'
import PropTypes from 'prop-types';
import data from '../../../data'
import { Features } from './Features'
import Typography from '../Typography/Typography';

import Websites from './Websites'
import Adverb from './Adverb'
import Pricing from './Pricing/Prices';
import { Team } from './Team'
import features from '../../../data/main/features';

export const Main = (props) => {
  const {
    className,

  } = props


  return (
    <main className={className}>
       <Features {...props} headline={<Typography children="FEATURES" variant="h2" className={'features__header'}></Typography>}></Features> 
       <Websites {...data}></Websites>
       {/* <Adverb {...data}></Adverb>
       <Pricing {...data}></Pricing>
       <Team {...data}></Team>   */}
    </main>
  )
}

Main.propTypes = {
  className: PropTypes.string
}

export default Main