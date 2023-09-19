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
          <h4 className={'feature__description'}>{item.title}</h4>
          <p className={'feature__text'}>{item.text}</p>
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