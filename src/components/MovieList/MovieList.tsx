import React from 'react'

//Mui
import { Grid, Pagination, Typography } from '@mui/material'

//Services
import getMovies from '../../services/getMovies/getMovies'

//Context
import { useSearchContext } from '../../hooks/useSearchContext'
import { useFeedbackContext } from '../../hooks/useFeedbackContext'

//Loading component
import MovieListSkeleton from './components/MovieListSkeleton'
import MovieListContent from './components/MovieListContent'
import { sampleMovie } from '../../constants/sampleMovie'

/**
 * MovieList consumes the searchresult generated in Search component
 * @returns
 */
const MovieList: React.FC = () => {
  const {
    totalPages,
    isLoading,
    setIsLoading,
    movies,
    setMovies,
    totalResults,
    search,
  } = useSearchContext()

  const { setErrorMessage } = useFeedbackContext()

  const onPagination = async (page: number) => {
    setIsLoading(true)
    try {
      if (!search) {
        setIsLoading(false)
        setErrorMessage("Can't search on nothing!")
        throw new Error("Can't search on nothing!")
      }
      const response = await getMovies(search.title, search.year, page)
      if (response.data.Response === 'True') {
        setIsLoading(false)
        setMovies(response.data.Search)
      } else {
        setIsLoading(false)
        setErrorMessage(`Could not load movies: ${response.data.Error}`)
        throw new Error(response.data.Error)
      }
    } catch (err) {
      setIsLoading(false)
      throw new Error(err)
    }
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ display: 'flex', justifyContent: 'center', marginTop: 0 }}
    >
      {/* If no search has been made */}
      {!movies && !search && (
        <>
          <Grid
            item
            xs={12}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Typography variant='body1'>Make a search a find movies like this one</Typography>
          </Grid>
          <MovieListContent
            movies={[
              sampleMovie
            ]}
          />
        </>
      )}

      {/* Search result */}
      {totalPages && movies && (
        <>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='button'>
              {totalResults} hits on "{search?.title}"
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination
              onChange={(_, page) => onPagination(page)}
              count={totalPages}
              variant='outlined'
              color='secondary'
            />
          </Grid>
        </>
      )}
      {isLoading ? <MovieListSkeleton /> : <MovieListContent movies={movies} />}
    </Grid>
  )
}

export default MovieList
