import React from 'react'
import PropTypes from 'prop-types';


export const Prices = (props) => {

  const {
    className,
    pricing,
    ...otherProps
  } = props

  const renderInfo = (item) => {
    return (
      <>
        {item.map(
          el =>
          <li 
          key={el.id}
          >
            {el}
          </li>
          )
        }
      </>
    )
  }

  const renderListItem = (item, i) => {

    return (

      <div className={'pricing__element'}>
        <div className={'pricing__element-info'}>
          <h4 className={'type'}>{item.type}</h4>
          <h5 className={'price'}>{'$' + item.price}</h5>
          <span className={'sub-price'}>per month</span>
          <ul className={'benefits'}>{renderInfo(item.info)}</ul>
        </div>
        <button>GET STARTED</button>
      </div>

    )
  }

  return (
    <>
      {pricing.list.map((item, i) => {
        return renderListItem(item, i)
      })}

    </>
  )
}

Prices.propTypes = {
  className: PropTypes.string
}

export default Prices