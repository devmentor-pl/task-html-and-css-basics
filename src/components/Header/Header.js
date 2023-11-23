import React, { useState } from 'react'
import { HeaderDataTeamContext } from '../context';
import HeaderSection from './HeaderSection';
import PropTypes from 'prop-types';

export const Header = (props) => {
  const {
    className,
    menu,
    ...header
  } = props

  const { Provider: HeaderDataTeamProvider } = HeaderDataTeamContext;
  const [elements, setElements] = useState(menu)

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