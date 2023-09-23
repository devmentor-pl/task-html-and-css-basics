import React from 'react'
import PropTypes from 'prop-types';

export const Pricing = (props) => {

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
                    <h4 className={'type'}>{item.type}</h4>
                    <h5 className={'price'}>{'$' + item.price}</h5>
                    <span className={'sub-price'}>per month</span>
                    <div className={'benefits'}>{renderInfo(item.info)}</div>
                </div>
                <button>GET STARTED</button>
            </div>
        )
    }

    return (
        <section className={"pricing"} id="pricing">
            <h3 className={"pricing__header"}>CHOOSE YOUR PRICING PLAN</h3>
            <p className={"pricing__description"}>Pick any of our super affordable pricing plans</p>
            <div className={"pricing__container"}>
                {pricing.list.map((item, i) => {
                    return renderListItem(item, i)
                })}
            </div>
        </section>
    )
}

Pricing.propTypes = {
    className: PropTypes.string
}

export default Pricing