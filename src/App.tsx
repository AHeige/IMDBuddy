//React
import { useState } from 'react'

//Components
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'

//Styles
import { ThemeProvider } from '@emotion/react'
import { darkTheme, lightTheme } from './styles/theme'

//Mui
import { CssBaseline } from '@mui/material'

//Pages
import LandingPage from './pages/LandingPage/LandingPage'

//Context
import SearchContextProvider from './contexts/SearchContextProvider'

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <SearchContextProvider>
        {/* Header component */}
        <Header darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}>
          <Search />
        </Header>

        <LandingPage />

        {/* Error handling */}
        <ErrorMessage />
      </SearchContextProvider>
    </ThemeProvider>
  )
}

export default App
