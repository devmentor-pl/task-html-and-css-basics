import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';

export const Review = (props) => {

  const {
    className,
    review,
  } = props

  const [iterate, increaseIterate] = useState(0)

  const resetCount = () => {
    increaseIterate(0); 
  };
  

  useEffect(() => {
 }, [iterate]);

  const handleSpanIncrease = () => {
    increaseIterate(iterate + 1);
  };

  const handleSpanDecrease = () => {
    increaseIterate(iterate - 1);
  };

  const renderListItem = (item, i) => {
  if (i === iterate) {
      return (
        <div className='review__element' key={i}>
          <figure class="review-slider__wrapper">
                <img class="review-slider__image" src={item.image} alt="1"></img>
                <figcaption class="js-slider__caption">źródło: unsplash.com</figcaption>
            </figure>
          <h4 className={'feature__title'}>{item.name}</h4>
          <p className={'feature__text'}>{item.text}</p>
        </div>
    )
    }
   else if ((iterate > 2 || iterate < 0) && item.id === 0)  {
    resetCount()
    return (
      <div className='feature' key={i}>
        <figure class="review-slider__wrapper">
          <img class="review-slider__image" src={item.image} alt="1"></img>
          <figcaption class="js-slider__caption">źródło: unsplash.com</figcaption>
        </figure>
        <h4 className={'feature__title'}>{item.name}</h4>
        <p className={'feature__text'}>{item.text}</p>
      </div>
    )
  }
  }

  return (
    <section className={`${className} section`} id={className}>
      <>
        <span class="review-slider__nav review-slider__nav--prev" onClick={handleSpanDecrease}>&lt;</span>
        <span class="review-slider__nav review-slider__nav--next" onClick={handleSpanIncrease}>&gt;</span>
        <div className={"review__container"}>
        <h2 class="review__headline">Nova customer's feedback</h2>
        {review.list.map((item, i) => {
          return renderListItem(item, i)
        })}
      </div>
      </>
    </section>
  )
}

Review.propTypes = {
  className: PropTypes.string,
  features: PropTypes.object
}

export default Review