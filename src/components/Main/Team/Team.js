import React from 'react'
import { useState } from 'react'

import Typography from '../../Typography/Typography';
import JoinUs from './JoinUs';
import AddYourself from './AddYourself'
import PropTypes from 'prop-types';

export const Team = (props) => {

  const [showComponent, setShowComponent] = useState(false);

  const handleInputChange = (e) => {
console.log(e.target)
    setShowComponent(true);
    e.target.style.display='none'
  };

  const {
    className,
    team,
  } = props

  const renderListItem = (item, i) => {
    return (
      <li className={'team__person'} key={i}>
        <div className={'team__photo'}>
          <img src={item.photo}></img>
        </div>
        <Typography className={'team__function'} variant={'h3'} children={item.function}></Typography>
        <Typography className={'team__data'} variant={'h4'} children={item.data}></Typography>
        <Typography className={'team__text'} variant={'p'} children={item.description}></Typography>
        <div className={'team__icons'}>
          <img className={'team__icon-twitter'} src={item.icons.twitter} alt="icon-twitter"></img>
          <img className={'team__icon-fb'} src={item.icons.facebook} alt="icon-facebook"></img>
        </div>
      </li>
    )
  }

  return (
    <section className={className} id={`#${className}`}>
      <h3 className={"team__header"}>THE TEAM</h3>
      <ul className={'team__container'}>
        {team.list.map((item, i) => {
          return renderListItem(item, i)
        })}
      </ul>
      <div className={'center'}>
        <button onClick={handleInputChange} className={"team__button-joinUs button"}>Join us!</button>
      </div>
      {showComponent && <JoinUs {...team}/>} 
    </section>
  )
}

Team.propTypes = {
  className: PropTypes.string,
  team: PropTypes.object
}

export default Team