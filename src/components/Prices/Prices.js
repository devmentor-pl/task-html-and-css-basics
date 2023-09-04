import React from 'react'

import PropTypes from 'prop-types'

export const Prices = (props) => {

  const {
    className,
    pricing,
    ...otherProps
  } = props

  const renderInfo = (item) => {
    return (
      <ul>
        {item.map(
          el =>
          <li 
          key={el.id}
          >
            {el}
          </li>
          )
        }
      </ul>
    )
  }

  const renderListItem = (item, i) => {

    return (

      <div className={'pricing__element'}>
        <div className={'pricing__element-info'}>
          <div className={'type'}>{item.type}</div>
          <div className={'price'}>{'$' + item.price}</div>
          <span className={'sub-price'}>per month</span>
          <div className={'benefits'}>{renderInfo(item.info)}</div>
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