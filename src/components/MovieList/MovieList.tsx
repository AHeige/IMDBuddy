import React from 'react'

//Mui
import { Badge, Chip, Grid, Pagination } from '@mui/material'

//Services
import getMovies from '../../services/getMovies/getMovies'

//Context
import { useSearchContext } from '../../hooks/useSearchContext'
import { useFavouritesContext } from '../../hooks/useFavouritesContext'
import { useFeedbackContext } from '../../hooks/useFeedbackContext'

//Loading component
import MovieListSkeleton from './components/MovieListSkeleton'
import MovieListContent from './components/MovieListContent'

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
    searchText,
    searchDate,
  } = useSearchContext()

  const { setErrorMessage } = useFeedbackContext()

  const { favourites } = useFavouritesContext()

  const onPagination = async (page: number) => {
    setIsLoading(true)
    try {
      const response = await getMovies(searchText, searchDate, page)
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
      {/* Favourites */}
      {!movies && favourites.length > 0 && (
        <>
          <Grid
            item
            xs={12}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Badge badgeContent={favourites.length} color='info'>
              <Chip color='default' label='Favourites' />
            </Badge>
          </Grid>
          <MovieListContent movies={favourites} />
        </>
      )}

      {/* Search result */}
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        {totalPages && movies && (
          <Pagination
            onChange={(_, page) => onPagination(page)}
            count={totalPages}
            variant='outlined'
            color='secondary'
          />
        )}
      </Grid>
      {isLoading ? <MovieListSkeleton /> : <MovieListContent movies={movies} />}
    </Grid>
  )
}

export default MovieList
