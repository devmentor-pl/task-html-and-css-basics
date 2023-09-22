import React from 'react'
import { useState } from 'react'
import data from '../../../data'
import AddYourself from './AddYourself'
import PropTypes from 'prop-types';




export const Team = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [showComponent, setShowComponent] = useState(false);

  // Event handler for input change
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setShowComponent(true);
  
  };


  const {
    className,
    team,
    ...otherProps
  } = props

  const renderListItem = (item, i) => {
    return (

      <div className={'team__person'}>
        <div className={'team__photo'}>
          <img src={item.photo}></img>
        </div>
        <div className={'team__function'}>{item.function}</div>
        <div className={'team__data'}>{item.data}</div>
        <div className={'team__text'}>{item.description}</div>
        <div className={'team__icons'}>
          <img className={'team__icon-twitter'} src={item.icons.twitter} alt="icon-twitter"></img>
          <img className={'team__icon-fb'} src={item.icons.facebook} alt="icon-facebook"></img>
        </div>
      </div>
    )
  }

  return (
    <section className={"team"} id="team">
      <h3 className={"team__header container"}>THE TEAM</h3>
      <div className={"team__sub-header"}>
        <label for="select__newmember">ADD NEW MEMBER OF TEAM</label>
        <select nameName={"select__newmember"}  onChange={handleInputChange} id="select__member">
          <option value="">--Please choose an option--</option>
          <option value={inputValue}>Add Yourself</option>
          <option value="generateRandomMember">Generate Random Member</option>
        </select>
      </div>
      <div className={'team__container'}>
        {team.list.map((item, i) => {
          return renderListItem(item, i)
        })}
        {showComponent && <AddYourself {...data}/>}
      </div>
      
    </section>
  )
}

Team.propTypes = {
  className: PropTypes.string
}

export default Team