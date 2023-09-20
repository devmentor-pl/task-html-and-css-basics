import React from 'react'
import PropTypes from 'prop-types'
import data from '../../../data'

export const Header = (props) => {
  const {
    className,
    header,
    ...otherProps
  
  } = props

  const renderListItem = (item) => {
    return (
        item.logo
    )
  }

  return (
    <>
        <div className={"header__container container"}>
            <h1 className={'header__logo'}>
                <img src={header.list.map((item) => {
    return renderListItem(item)})} alt="logo">
                </img>
            </h1>
            <div class="navigation"></div>
        </div>
        <div class="hero container" id="hero">
            <div class="hero__info">
                <h2 class="hero__header">Beautiful Free Nova template</h2>
                <p class="hero__sub-header">A top notch premium quality template for your next web project</p>
                <button class="hero__button">Download FREE!</button>
            </div>
            <div class="hero__photo-container">
                <img class="image" src="../images/screen.png" alt="screen" width="350px"></img>
            </div>
        </div>
    </>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
