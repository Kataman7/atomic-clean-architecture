import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { themes } from '../styles/theme'
import { GlobalStyles } from '../styles/globalStyles'
import PagHome from './PagHome'
import MolThemeToggle from '../components/molecules/MolThemeToggle'
import { LanguageProvider } from '../i18n/LanguageContext'
import OrgHeader from '../components/organisms/OrgHeader'

const AppContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  min-height: 100vh;
  padding: 0 5vw 20px 5vw;
  
  @media (min-width: 800px) {
    padding: 0 10vw 20px 10vw;
  }
  
  @media (min-width: 1400px) {
    padding: 0 28vw 20px 28vw;
  }
  
  font-family: ${props => props.theme.fontFamily};
  overflow-x: hidden;
`;

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('portfolio');

  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName);
  };

  return (
    <LanguageProvider>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyles />
        <AppContainer>
          <MolThemeToggle onThemeChange={handleThemeChange} />
          <OrgHeader titleKey="name" />
          <PagHome />
        </AppContainer>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
