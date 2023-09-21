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
            <img className={'team__icon-twitter'} src={item.twitter} alt="icon-twitter"></img>
            <img className={'team__icon-fb'} src={item.facebook} alt="icon-facebook"></img>
          </div>
        </div>
      </>
    )
  }

  return (
<section class="team" id="team">
       <h3 class="team__header container">THE TEAM</h3>
            <div class="team__sub-header">
                <label for="select__newmember">ADD NEW MEMBER OF TEAM</label>
                <select name="select__newmember" id="select__member">
                    <option value="">--Please choose an option--</option>
                    <option value="addYourself">Add Yourself</option>
                    <option value="generateRandomMember">Generate Random Member</option>
                </select>
            </div>
      {team.list.map((item, i) => {
        return renderListItem(item, i)
      })}
      <AddYourself {...data}></AddYourself>
    </section>
  )
}

Team.propTypes = {
  className: PropTypes.string
}

export default Team