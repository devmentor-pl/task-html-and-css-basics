import React from 'react'
import PropTypes from 'prop-types';

export const Adverb = (props) => {
  const {
    className,
    adverb,
    headline,
    ...otherProps

  } = props


  return (
    <section className={"adverb"}>
      <div className={"adverb__image-container"}>
        <img src={adverb.imac} alt="monitor"></img>
      </div>
      <div className={"adverb__text"}>
        {/* <h3 className={"adverb__text-header"}>SIMPLE AND BEAUTIFUL</h3> */}
        {headline}
        <p className={"adverb__text-description"}>Use Nova theme for your next web project. It
          is completely customizable so you can change any of the sections to fit your needs.
          Nova Theme is free for any kind of use, personal and commercial. Have fun and good luck!
        </p>
      </div>
    </section>
  )
}

Adverb.propTypes = {
  className: PropTypes.string,
  adverb: PropTypes.object
}

export default Adverb