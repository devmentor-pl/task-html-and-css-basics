import React from 'react'
import PropTypes from 'prop-types'
import data from '../../../data'


export const Pricing = (props) => {
  const {
    className,
    adverb,
    ...otherProps
  
  } = props


  return (
    <section className={"pricing"} id="pricing">
            <h3 className={"pricing__header container"}>CHOOSE YOUR PRICING PLAN</h3>
            <p className={"pricing__description container"}>Pick any of our super affordable pricing plans</p>
            <div className={"pricing__container container"}></div>
        </section>
  )
}

Pricing.propTypes = {
  className: PropTypes.string
}

export default Pricing