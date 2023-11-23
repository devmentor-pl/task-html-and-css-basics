import React from 'react'
import Benefits from '../Benefits';
import PropTypes from 'prop-types';

export const Pricing = (props) => {

    const {
        className,
        pricing
    } = props

    const renderListItem = (item, i) => {
        return (
            <div className={'pricing__element'} key={i}>
                <div className={'pricing__element-info'}>
                    <h4 className={'type'}>{item.type}</h4>
                    <h5 className={'price'}>{'$' + item.price}</h5>
                    <span className={'sub-price'}>per month</span>
                    <Benefits className={'benefits'} content={item.info}></Benefits>
                </div>
                <button className={'button--full'}>GET STARTED</button>
            </div>
        )
    }

    return (
        <section className={className} id={className}>
            <h3 className={'pricing__header headline--h3'}>{pricing.headline}</h3>
            <div className={"pricing__container container"}>
                {pricing.list.map((item, i) => {
                    return renderListItem(item, i)
                })}
            </div>
        </section>
    )
}

Pricing.propTypes = {
    className: PropTypes.string,
    pricing: PropTypes.object
}

export default Pricing