import React, {useState} from 'react'
import { HeaderDataTeamContext } from '../context';
import PropTypes from 'prop-types';
import HeaderSection from './HeaderSection';
import Menu2 from './Menu2';


export const Header = (props) => {
  const {
    className,
     initialTasks,
    ...header
   
  } = props


  const { Provider: HeaderDataTeamProvider } = HeaderDataTeamContext;
  const [elements, setElements] = useState(initialTasks)
  //   const [elements2, setElements2] = useState(menu2[1])

    
    
  // const [headerData, setNavbarOpen] = useState(header.menu2);


  return (
    <HeaderDataTeamProvider value={{ elements, setElements }}>
    <header className={className}>
      <HeaderSection {...header}></HeaderSection>
    </header>
    </HeaderDataTeamProvider>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  header: PropTypes.object
}


export default Header