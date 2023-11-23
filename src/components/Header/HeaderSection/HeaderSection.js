import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types';
import Logo from '../Logo';
import SelectLanguage from '../SelectLanguage';
import Navigation from '../Navigation/Navigation';

export const HeaderSection = (props) => {
  const {
    logo,
    headline,
    description,
    buttonText,
    screen,
    menu,
  } = props

  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`${scrolled ? `header__nav scrolled ` : 'header__nav'}`}>
        <Logo className={'header__logo'} logo={logo}></Logo>
        <div className={"header__navigation"}>
          <Navigation content={menu}></Navigation>
        </div>
        <div className={"header__other"}>
          <SelectLanguage className={'select'}></SelectLanguage>
          <button className={'button--border'}>Log in</button>
          <button className={'button--full'}>Start for free</button>
        </div>
      </div>
      <div className={"header__hero"} id="hero">
        <article className={"hero__info"}>
          <h3 className={'hero__header headline--h3'}>{headline}</h3>
          <p className={'hero__sub-header'}>{description}</p>
          <button className={'button--full'}>Order a website</button>
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


