import React from 'react'
import PropTypes from 'prop-types';

export const Features = (props) => {

  const {
    className,
    features,
    ...otherProps
  } = props

  const renderSrc = (item) => {
    return (
        item.image
    )
  }

  const renderListItem = (item, i) => {
    return (
      <>
        <div className={'feature'}>
          <img className={'feature__image'} src={features.list.map((item) => {
    return renderSrc(item)})} ></img>
          <h4 className={'feature__description'}>{item.title}</h4>
          <p className={'feature__text'}>{item.text}</p>
        </div>
      </>
    )
  }

  return (
    <section className={"features"} id="features">
      <h2 className={"features__header"}>FEATURES</h2>
      <div className={"features__container"}>
        {features.list.map((item, i) => {
          return renderListItem(item, i)
        })}
      </div>
    </section>
  )
}

Features.propTypes = {
  className: PropTypes.string
}

export default Features