import React from 'react'

//Mui
import {
  Grid,
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Pagination,
} from '@mui/material'

import nopic from '../../assets/no-pic.jpg'

//Services
// import getMovies from '../../services/getMovies/getMovies'
import { useSearchContext } from '../../hooks/useSearchContext'

const MovieList: React.FC = () => {
  const { totalPages, isLoading, movies, setChosenMovieId, setClickedModal } =
    useSearchContext()

  const handleClick = async (imdbID: string) => {
    setChosenMovieId(imdbID)
    setClickedModal(true)
  }

  const onPagination = async (page: number) => {
    console.log(page)
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ display: 'flex', justifyContent: 'center', marginTop: 0 }}
    >
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          onChange={(_, page) => onPagination(page)}
          count={totalPages}
          variant='outlined'
          color='secondary'
        />
      </Grid>
      {isLoading ? (
        <>
          {/* Skeleton for loading effect */}
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <Grid item key={i}>
                <Skeleton
                  sx={{ padding: 0, margin: 0 }}
                  width={'350px'}
                  height={'140px'}
                />
                <CardContent>
                  <Skeleton />
                </CardContent>
                <CardActions>
                  <Skeleton width={'20%'} />
                </CardActions>
              </Grid>
            )
          })}
        </>
      ) : (
        <>
          {movies &&
            movies.map((movie) => {
              const pic = movie.Poster === 'N/A' ? nopic : movie.Poster

              return (
                <Grid item key={movie.imdbID}>
                  <Card sx={{ width: '350px' }}>
                    <CardMedia sx={{ height: '140px' }} image={pic} />
                    <CardContent>
                      <p>{movie.Title}</p>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => handleClick(movie.imdbID)}
                        size='small'
                      >
                        Read more
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
        </>
      )}
    </Grid>
  )
}

export default MovieList
