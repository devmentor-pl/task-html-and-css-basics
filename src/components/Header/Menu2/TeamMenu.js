import React, { useContext, useState } from 'react'
import { HeaderDataTeamContext } from '../../context';
import { SubMenuContext } from '../../context';

export const TeamMenu = (props) => {
  const {
    team,
    content,

  } = props

  const { elements } = useContext(HeaderDataTeamContext);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (key) => {
    setHoveredItem(key);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };




  const renderListItem = (item, i) => {
    return (
      <>
        {item.name && item.id1
          ?
          <li
            key={item.id}
            className={`${item.className ? ` ${item.className} menu__item` : 'menu__item'}`}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            {item.name}
{
  hoveredItem === item.id && (
    <ul>
   
      {elements
        .filter((el) => el.child === item.id)
        .map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
    </ul>
  )
}
          </li> : ''
        }

      </>
    )
  }
  return (
    <>
      <ul className={''} >{
        elements.map((item, i) => {
          return renderListItem(item, i)
        })
      }
      </ul>
    </>
  )

}


export default TeamMenu