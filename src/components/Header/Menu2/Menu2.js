import React, { useContext, } from 'react'
import { SubMenuContext } from '../../context';
import TeamMenu from './TeamMenu';

import PropTypes from 'prop-types';

export const Menu2= (props) => {
  const {
    className,
    team,
    content,
  } = props

console.log(team)

  const renderListItem = (item, i) => {
    console.log(item)
    return (
      <>
       <li>{item.firstItem}</li>
      </>
    )
  }

  return (
    <>
      <ul className={'menu__list'} >
        {<TeamMenu content={team} ></TeamMenu>}
      </ul>
    </>
  )
}

Menu2.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
}

export default Menu2
