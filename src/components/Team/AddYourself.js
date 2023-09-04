import React from 'react'

import PropTypes from 'prop-types'


export const AddYourself = (props) => {

  const {
    className,
    team,
    ...otherProps
  } = props


  const renderListItem = () => {
    return (
      <>
        <div className={'team__person you'}>
          <div className={'team__photo'}><input type="file" id="fileInput" accept="image/*"></input>
            <img id="image" /></div>
          <div className={'team__function'}><input type="text" id="textInput" placeholder={'Please write your function'}></input></div>
          <div className={'team__data'}><input type="text" id="textInput" placeholder={'Please write your name'}></input></div>
          <div className={'team__icons'}>
            <img className={'team__icon-twitter'} src="./images/team-twitter.svg" alt="team-twitter"></img>
            <img class={'team__icon-fb'} src="./images/team-facebook.svg" alt="team-facebook"></img>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {team.addYou.map((item, i) => {
        return renderListItem(item, i)
      })}

    </>
  )
}

AddYourself.propTypes = {
  className: PropTypes.string
}

export default AddYourself