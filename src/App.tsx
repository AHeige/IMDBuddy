import { useState } from 'react'

//Components
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'

//Styles
import { ThemeProvider } from '@emotion/react'
import { darkTheme } from './styles/theme'

//Mui
import { CssBaseline } from '@mui/material'

//Interfaces
import { Movie, MovieDetails } from './interface/Movie'
import MovieList from './components/MovieList/MovieList'
import MovieDetailed from './components/MovieDetailed/MovieDetailed'

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined)
  const [movies, setMovies] = useState<Movie[]>()
  const [chosenMovie, setChosenMovie] = useState<MovieDetails | undefined>()

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* Header component */}
      <Header>
        <Search
          movieData={(movies) => setMovies(movies)}
          setIsLoading={setIsLoading}
          setErrorMsg={setErrorMsg}
        />
      </Header>

      {/* Detailed view of one movie */}
      {chosenMovie && (
        <MovieDetailed movie={chosenMovie} setChosenMovie={setChosenMovie} />
      )}

      {/* Movies  */}
      <MovieList
        isLoading={isLoading}
        movies={movies}
        setErrorMsg={setErrorMsg}
        setChosenMovie={setChosenMovie}
      />

      {/* Error handling */}
      {errorMsg && (
        <ErrorMessage setErrorMsg={setErrorMsg} errorMsg={errorMsg} />
      )}
    </ThemeProvider>
  )
}

export default App
