import React from 'react'
import { useState } from 'react'

import Typography from '../../Typography/Typography';
import JoinUs from './JoinUs';
import PropTypes from 'prop-types';

export const Team = (props) => {

  const [showComponent, setShowComponent] = useState(false);

  const handleInputChange = (e) => {
    e.target.style.display = 'none'
    setShowComponent(true);
   };
  const {
    className,
    team,
    idSection
  } = props

  const renderListItem = (item, i) => {
    return (
      <li className={'team__person'} key={i}>
        <div className={'team__photo'}>
          <img src={item.photo}></img>
        </div>
        <h4 className={'team__function headline--h4'}>{item.function}</h4>
        <h5 className={'team__data headline--h5'}>{item.data}</h5>
        <p className={'team__text p'}>{item.description}</p>
        <div className={'team__icons'}>
          <img className={'team__icon-twitter'} src={item.icons.twitter} alt="icon-twitter"></img>
          <img className={'team__icon-fb'} src={item.icons.facebook} alt="icon-facebook"></img>
        </div>
      </li>
    )
  }

  return (
    <section className={className} id={idSection}>
      <h3 className={"team__header headline--h3"}>THE TEAM</h3>
      <ul className={'team__container'}>
        {team.list.map((item, i) => {
          return renderListItem(item, i)
        })}
      </ul>
      <div className={'team__button-cont'}>
        <button onClick={handleInputChange} className={"button"}>Join us!</button>
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