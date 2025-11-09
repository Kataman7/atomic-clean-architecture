import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { themes } from '../styles/theme'
import { GlobalStyles } from '../styles/globalStyles'
import MolThemeToggle from '../components/molecules/MolThemeToggle'
import { LanguageProvider } from '../i18n/LanguageContext'
import OrgHeader from '../components/organisms/OrgHeader'
import AppRoutes from '../routes/routes'

const AppContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  min-height: 100vh;
  padding: 0 5vw 20px 5vw;
  
  @media (min-width: 700px) {
    padding: 0 7vw 20px 7vw;
  }
  
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
        <BrowserRouter>
          <AppContainer>
            <MolThemeToggle onThemeChange={handleThemeChange} />
            <OrgHeader titleKey="name" />
            <AppRoutes />
          </AppContainer>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
