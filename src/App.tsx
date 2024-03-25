//Components
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'

//Styles
import { ThemeProvider } from '@emotion/react'
import { darkTheme } from './styles/theme'

//Mui
import { CssBaseline } from '@mui/material'

//Pages
import LandingPage from './pages/LandingPage/LandingPage'

//Context
import SearchContextProvider from './contexts/SearchContextProvider'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SearchContextProvider>
        {/* Header component */}
        <Header>
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
