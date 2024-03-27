//Mui
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
} from '@mui/material'

//Interface
import { Movie } from '../../../interface/Movie'

//Img for fallback
import nopic from '../../../assets/no-pic.jpg'
import { useSearchContext } from '../../../hooks/useSearchContext'
import LikeButton from '../../LikeButton/LikeButton'

import './MovieListContent.css'
interface MovieListContentProps {
  movies: Movie[] | undefined
}

export const MovieListContent: React.FC<MovieListContentProps> = ({
  movies,
}) => {
  const { setChosenMovieId, setClickedModal } = useSearchContext()

  const handleClick = (imdbID: string) => {
    setChosenMovieId(imdbID)
    setClickedModal(true)
  }

  return (
    <>
      {movies &&
        movies.map((movie) => {
          const pic = movie.Poster === 'N/A' ? nopic : movie.Poster

          return (
            <Grid item key={movie.imdbID} className='movieItem'>
              <Card sx={{ width: '350px' }}>
                <CardMedia sx={{ height: '140px' }} image={pic}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <CardActions
                      sx={{
                        background: '#212121',
                        width: 'fit-content',
                        marginTop: '-0.em',
                      }}
                    >
                      <LikeButton imdbID={movie.imdbID} />
                    </CardActions>
                  </Box>
                </CardMedia>
                <CardContent>
                  <p>{movie.Title}</p>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => handleClick(movie.imdbID)}
                    size='small'
                    color='primary'
                    variant='outlined'
                  >
                    Read more
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
    </>
  )
}

export default MovieListContent
