import React from 'react'

//Mui
import { Chip, Grid, Pagination } from '@mui/material'

//Services
import getMovies from '../../services/getMovies/getMovies'

//Context
import { useSearchContext } from '../../hooks/useSearchContext'

//Loading component
import MovieListSkeleton from './components/MovieListSkeleton'
import MovieListContent from './components/MovieListContent'
import { useFavourites } from '../../hooks/useFavourites'

/**
 * MovieList consumes the searchresult generated in Search component
 * @returns
 */
const MovieList: React.FC = () => {
  const {
    setErrorMsg,
    totalPages,
    isLoading,
    setIsLoading,
    movies,
    setMovies,
    searchText,
    searchDate,
  } = useSearchContext()

  const { favourites } = useFavourites()

  const onPagination = async (page: number) => {
    setIsLoading(true)
    try {
      const response = await getMovies(searchText, searchDate, page)
      if (response.data.Response === 'True') {
        setIsLoading(false)
        setMovies(response.data.Search)
      } else {
        setIsLoading(false)
        setErrorMsg(`Could not load movies: ${response.data.Error}`)
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
          <Chip sx={{ marginTop: '1em' }} color='success' label='Favourites' />
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
