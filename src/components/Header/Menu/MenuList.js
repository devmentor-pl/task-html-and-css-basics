import React, { useContext, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { HeaderDataTeamContext } from '../../context';
import { Link } from 'react-router-dom';


export const MenuList = () => {

  const { elements } = useContext(HeaderDataTeamContext);
  const [hoveredListItem, setHoveredListItem] = useState(null);
  const [hoveredSubListItem, setHoveredSubListItem] = useState(null);
  const [showSubList, setShowSubList] = useState(null);

  const handleMouseEnterListItem = (key) => {
    setHoveredListItem(key);
  };

  const handleMouseEnterSubListItem = (key) => {
    setHoveredSubListItem(key);
  };

  const handleMouseEnterSubSubListItem = (key) => {
    setShowSubList(key);
  };


  const renderListItem = (item) => {

    const isMobile = window.innerWidth <= 900;
    const eventToUse = isMobile ? 'onClick' : 'onMouseEnter';

    return (
      <>
        {item.elementList
          ?
          <>
            <li
              key={item.id}
              className={`${item.className ? ` ${item.className} menu__item main` : 'menu__item'}`}
              {...{ [eventToUse]: isMobile ? () => handleMouseEnterListItem(item.id) : () => handleMouseEnterListItem(item.id) }}
            >
              {item.className === 'menu__item--parent' ?<div className='menu__item--parent--title'>{item.name}<FaChevronDown /></div>  : <div className='menu__item--parent--title'> <a href={`#${item.idSection}`}>{item.name}</a></div>}
              {item.parentSubList
                ?
                <ul className={`${'menu__sublist'} ${hoveredListItem === item.id ? `${'menu__sublist--block'}` : `${'menu__sublist--hide'}`} `}>
                  {elements
                    .filter((el) => el.childFor === item.name)
                    .map((el) => (
                      <li
                        key={el.id}
                        className={`${item.className ? ` ${item.className} menu__sublist__item` : 'menu__item'}`}
                        {...{ [eventToUse]: isMobile ? () => handleMouseEnterSubListItem(el.id) : () => handleMouseEnterSubSubListItem(el.id) }}
                      >
                        {el.name}
                        <ul
                          className={`${'menu__sub-sublist'} 
                        ${hoveredSubListItem === el.id ? `${'menu__sub-sublist--block'}` : `${'menu__sub-sublist--hide'}`}
                        ${showSubList === el.id ? `${'menu__sub-sublist--block'}` : ''}
                        `}>
                          {elements
                            .filter((el2) => el2.childFor === el.name)
                            .map((el2) => (
                              <li
                                key={el2.id}
                              >{el2.name}
                              </li>
                            ))
                          }
                        </ul>
                      </li>))
                  }
                </ul>
                : ""
              }

            </li>
          </>
          : ""
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