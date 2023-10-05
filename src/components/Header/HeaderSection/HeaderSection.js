import React from 'react'
import PropTypes from 'prop-types';
import Logo from '../Logo';
import Navigation from '../Navigation/Navigation';
import Typography from '../../Typography/Typography';

export const HeaderSection = (props) => {
  const {
    logo,
    headline,
    button,
    text,
    screen, 
 } = props

  return (
    <>
      <div className={"header__container"}>
        <Logo className={'header__container__logo'} logo={logo}></Logo>
        <div className={"header__container__navigation"}>
          <Navigation></Navigation>
        </div>
      </div>
      <div className={"hero"} id="hero">
        <article class="hero__info">
          <Typography className={'hero__header'} variant={'h2'} children={headline}></Typography>
          <Typography className={'hero__sub-header'} variant={'p'} children={text}></Typography>
          <Typography className={'hero__button button'} variant={'button'} color={'black'} children={button}></Typography>
        </article>
        <div class="hero__photo-container">
          <img class="image" src={screen} alt="screen" width="350px"></img>
        </div>
      </div>
    </>
  )
}

HeaderSection.propTypes = {
  logo: PropTypes.string,
  screen: PropTypes.string
}

export default HeaderSection


