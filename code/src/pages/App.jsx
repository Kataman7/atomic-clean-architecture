import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { themes } from '../styles/theme'
import AppRoutes from '../routes/routes'
import AtmButton from '../components/atoms/AtmButton'

const AppContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  min-height: 100vh;
`;

const AppTitle = styled.h1`
  color: ${props => props.theme.colors.text};
`;

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light')

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Router>
        <AppContainer>
          <AppTitle>Mon Application</AppTitle>
          <AtmButton label={`Thème ${currentTheme === 'light' ? 'Sombre' : 'Clair'}`} onClick={toggleTheme} />
          <AppRoutes />
        </AppContainer>
      </Router>
    </ThemeProvider>
  )
}

export default App
