import React from 'react'
import { useState } from 'react'
import data from '../../../../data'
import AddYourself from './AddYourself'
import PropTypes from 'prop-types';

export const Team = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [showComponent, setShowComponent] = useState(false);

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
        <h3 className={'team__function'}>{item.function}</h3>
        <h4 className={'team__data'}>{item.data}</h4>
        <p className={'team__text'}>{item.description}</p>
        <div className={'team__icons'}>
          <img className={'team__icon-twitter'} src={item.icons.twitter} alt="icon-twitter"></img>
          <img className={'team__icon-fb'} src={item.icons.facebook} alt="icon-facebook"></img>
        </div>
      </div>
    )
  }

  return (
    <section className={"team"} id="team">
      <h3 className={"team__header"}>THE TEAM</h3>
      <div className={'team__container'}>
        {team.list.map((item, i) => {
          return renderListItem(item, i)
        })}
      </div>
      <div className={'center'}>
        <button onClick={handleInputChange} className={"team__button-joinUs button"}>Join us!</button>
      </div>
      {showComponent && <AddYourself {...data}/>}
    </section>
  )
}

Team.propTypes = {
  className: PropTypes.string
}

export default Team