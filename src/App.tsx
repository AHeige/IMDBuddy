//React
import { useState } from 'react'

//Components
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import FeedbackMessage from './components/FeedbackMessage/FeedbackMessage'

//Styles
import { ThemeProvider } from '@emotion/react'
import { darkTheme, lightTheme } from './styles/theme'

//Mui
import { CssBaseline } from '@mui/material'

//Pages
import LandingPage from './pages/LandingPage/LandingPage'
import FavouritePage from './pages/FavouritePage/FavouritePage'

//Context
import { SearchProvider } from './contexts/SearchContext/SearchContext'
import { FavouritesProvider } from './contexts/FavouriteContext/FavouriteContext'
import { FeedbackProvider } from './contexts/FeedbackContext/FeedbackContext'
import {  Routes, Route } from 'react-router-dom'
import MovieDetailed from './components/MovieDetailed/MovieDetailed'

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <FeedbackProvider>
        <SearchProvider>
          <FavouritesProvider>
            {/* Header component */}
            <Header
              darkMode={darkMode}
              toggleTheme={() => setDarkMode(!darkMode)}
            >
              <Search />
            </Header>

            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/favourites' element={<FavouritePage />}/>
                
            </Routes>

            {/* Modal to show details of Movies when clicked on!*/}
            <MovieDetailed />

            {/* Error handling */}
            <FeedbackMessage />
          </FavouritesProvider>
        </SearchProvider>
      </FeedbackProvider>
    </ThemeProvider>
  )
}

export default App
