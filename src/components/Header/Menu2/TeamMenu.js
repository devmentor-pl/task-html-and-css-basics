import React, { useContext, useState } from 'react'
import { HeaderDataTeamContext } from '../../context';
import { SubMenuContext } from '../../context';

export const TeamMenu = (props) => {
  const {
    team,
    content,

  } = props

  const { elements } = useContext(HeaderDataTeamContext);
  const [hoveredItem1, setHoveredItem1] = useState(null);
  const [hoveredItem2, setHoveredItem2] = useState(null);

  const handleMouseEnter1 = (key) => {
    setHoveredItem1(key);
  };

  const handleMouseLeave1 = () => {
    setHoveredItem1(null);
  };

  const handleMouseEnter2 = (key) => {
    setHoveredItem2(key);
  };

  const handleMouseLeave2 = () => {
    setHoveredItem2(null);
  };





  const renderListItem = (item, i) => {
    return (
      <>
        {item.name && item.id1
          ?
          <li
            key={item.id}
            className={`${item.className ? ` ${item.className} menu__item` : 'menu__item'}`}
            onMouseEnter={() => handleMouseEnter1(item.id)}
            onMouseLeave={handleMouseLeave1}
          >
            {item.name}
          
{
  hoveredItem1 === item.id && (
    <ul>
   {elements
        .filter((el) => el.child === item.id)
        .map((el) => (
          <li 
          key={el.id}
          onMouseEnter={() => handleMouseEnter2(el.id)}
          onMouseLeave={handleMouseLeave2}
          >{el.name}
          
          {
  hoveredItem2 === el.id && (
  
    <ul>
     { alert('hover2')  }
   {elements
        .filter((el2) => el2.child === el.id)
        .map((el2) => (
          <li 
          key={el2.id}
    
          >{el2.name}
          
          
          </li>
        ))}
    </ul>
  )
}
          </li>
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