import React from 'react'

import data from '../../../data'
import AddYourself from './AddYourself'
import { Images } from '../../js/Images'


import PropTypes from 'prop-types'

export const Team = (props) => {

  const {
    className,
    team,
    ...otherProps
  } = props

  const renderListItem = (item, i) => {
    return (
      <>
        <div className={'team__person'}>
          <div className={'team__photo'}>
            <img src={item.photo}></img>
          </div>
          <div className={'team__function'}>{item.function}</div>
          <div className={'team__data'}>{item.data}</div>
          <div className={'team__text'}>{item.description}</div>
          <div className={'team__icons'}>
            <img className={'team__icon-twitter'} src={item.icons[0]} alt="team-twitter"></img>
            <img className={'team__icon-fb'} src={item.icons[1]} alt="team-facebook"></img>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {team.list.map((item, i) => {
        return renderListItem(item, i)
      })}
      <AddYourself {...data}></AddYourself>
    </>
  )
}

Team.propTypes = {
  className: PropTypes.string
}

export default Team