import React from 'react'
import Benefits from '../Benefits';
import Typography from '../../Typography/Typography';
import PropTypes from 'prop-types';

export const Pricing = (props) => {

    const {
        className,
        pricing,

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
            <div className={'pricing__element'} key={i}>
                <div className={'pricing__element-info'}>
                    <Typography className={'type'} variant={'h4'} children={item.type}></Typography>
                    <Typography className={'price'} variant={'h5'} children={'$' + item.price}></Typography>
                    <span className={'sub-price'}>per month</span>
                    <Benefits className={'benefits'} content={item.info}></Benefits>
                </div>
                <button>GET STARTED</button>
            </div>
        )
    }

    return (
        <section className={className} id={`#${pricing}`}>
            <Typography className={'pricing__header'} variant={'h3'} children={pricing.headline}></Typography>
            <Typography className={'pricing__description'} variant={'p'} children={pricing.description}></Typography>
            <div className={"pricing__container"}>
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