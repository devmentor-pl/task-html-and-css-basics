import React, { useContext, useState } from 'react'
import {  FaChevronDown } from 'react-icons/fa';
import { HeaderDataTeamContext } from '../../context';


export const MenuList = () => {

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
        {item.parent
          ?
          <li
            key={item.id}
            className={`${item.className ? ` ${item.className} menu__item` : 'menu__item'}`}
            onMouseEnter={() => handleMouseEnter1(item.id)}
            
           onMouseLeave={handleMouseLeave1}
           
          >
            {item.name}
            {item.className === 'menu__item--parent' ? <FaChevronDown />: ''}
          
          
{
  hoveredItem1 === item.id && (
    <ul className={'menu__sublist'}>
   {elements
        .filter((el) => el.childFor === item.name)
        .map((el) => (
          <li 
          key={el.id}
          onMouseEnter={() => handleMouseEnter2(el.id)}
          onMouseLeave={handleMouseLeave2}
          >{el.name}
          
          {
  hoveredItem2 === el.id && (
  
    <ul className={'menu__sublist'}>
  
   {elements
        .filter((el2) => el2.childFor === el.name)
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
     {
        elements.map((item, i) => {
          return renderListItem(item, i)
        })
      }

    </>
  )

}


export default MenuList