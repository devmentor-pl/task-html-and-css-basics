import React from 'react'
import PropTypes from 'prop-types'

export const Features = (props) => {

  const {
    className,
    features,
    ...otherProps
  } = props

 const renderListItem = (item, i) => {

    return (
      <>
        <div className={'feature'}>
          <img className={'feature__image'} src={`${item.image}`} alt="responsive"></img>
          <div className={'feature__description'}>{item.title}</div>
          <div className={'feature__text'}>{item.text}</div>
        </div>
      </>
    )
  }

  return (
    <>
      {features.list.map((item, i) => {
        return renderListItem(item, i)
      })}
    </>
  )
}

Features.propTypes = {
  className: PropTypes.string
}

export default Features