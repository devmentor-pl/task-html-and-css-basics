import React from 'react'
import Typography from '../../Typography/Typography';
import PropTypes from 'prop-types';

export const Features = (props) => {

  const {
    className,
    features,
    headline
  } = props

  const renderListItem = (item, i) => {
    return (
        <div className='feature' key={i}>
          <img className={'feature__image'} src={item.image} ></img>
          <Typography className={'feature__description'} variant={'h4'} children={item.title}></Typography>
          <Typography className={'feature__text'} variant={'p'} children={item.text}></Typography>
        </div>
    )
  }

  return (
    <section className={`${className} section`} id={`#${className}`}>
        {headline}
        <div className={"features__container"}>
        {features.list.map((item, i) => {
          return renderListItem(item, i)
        })}
      </div>
    </section>
  )
}

Features.propTypes = {
  className: PropTypes.string,
  features: PropTypes.object
}

export default Features