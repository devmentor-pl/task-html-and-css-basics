import React from 'react'
import PropTypes from 'prop-types';

export const Websites = (props) => {
  const {
    className,
    websites,
    ...otherProps

  } = props

  return (
    <section className={"websites"}>
      <div className={"websites__container"}>
        <img className={"websites__photo"} src={websites.logos} alt="logos"></img>
      </div>
    </section>
  )
}

Websites.propTypes = {
  className: PropTypes.string,
  websites: PropTypes.object
}

export default Websites