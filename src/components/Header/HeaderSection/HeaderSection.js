import React from 'react'
import PropTypes from 'prop-types';
import Logo from '../Logo';
import Navigation from '../Navigation/Navigation';

export const HeaderSection = (props) => {
  const {
    logo,
    headline,
    description,
    buttonText,
    screen,
    menu
 } = props

  return (
    <>
      <div className={"header__container"}>
        <Logo className={'header__logo'} logo={logo}></Logo>
        <div className={"header__navigation"}>
          <Navigation content={menu}></Navigation>
        </div>
      </div>
      <div className={"hero"} id="hero">
        <article className={"hero__info"}>
          <h2 className={'hero__header'}>{headline}</h2>
          <p className={'hero__sub-header'}>{description}</p>
          <button className={'hero__button button'}>{buttonText}</button>
        </article>
        <div className={"hero__photo-container"}>
          <img className={"hero__photo"} src={screen} alt="screen" width="350px"></img>
        </div>
      </div>
    </>
  )
}

HeaderSection.propTypes = {
  logo: PropTypes.string,
  screen: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  screen: PropTypes.string
}

export default HeaderSection


