import React from 'react'
import PropTypes from 'prop-types';

export const Review = (props) => {

  const {
    className,
    features,
  } = props

  const renderListItem = (item, i) => {
    return (
        <div className='feature' key={i}>
          <div className={'feature__image'}>
            <img src={item.image}></img>
          </div>
          <h4 className={'feature__title'}>{item.title}</h4>
          <p className={'feature__text'}>{item.text}</p>
        </div>
    )
  }

  return (
    <section className={`${className} section`} id={className}>
        
        <div className={"review__container"}>
        <h2 class="review__headline">Nova customer's feedback</h2>
        {/* {features.list.map((item, i) => {
          return renderListItem(item, i)
        })} */}
      </div>
    </section>
  )
}

Review.propTypes = {
  className: PropTypes.string,
  features: PropTypes.object
}

export default Review