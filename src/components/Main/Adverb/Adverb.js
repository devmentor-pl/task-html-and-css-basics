import React from 'react'
import PropTypes from 'prop-types';

export const Adverb = (props) => {
  const {
    className,
    adverb,
    headline,
    text
 

  } = props


  return (
    <section className={className}>
      <div className={"adverb__image-container"}>
        <img src={adverb.imac} alt="monitor"></img>
      </div>
      <div className={"adverb__text"}>
        {headline}
        {text}
      </div>
    </section>
  )
}

Adverb.propTypes = {
  className: PropTypes.string,
  adverb: PropTypes.object
}

export default Adverb