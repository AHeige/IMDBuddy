//Mui
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material'

//Interface
import { Movie } from '../../../interface/Movie'

//Img for fallback
import nopic from '../../../assets/no-pic.jpg'
import { useSearchContext } from '../../../hooks/useSearchContext'

interface MovieListContentProps {
  movies: Movie[] | undefined
}

export const MovieListContent: React.FC<MovieListContentProps> = ({
  movies,
}) => {
  const { setChosenMovieId, setClickedModal } = useSearchContext()

  const handleClick = async (imdbID: string) => {
    setChosenMovieId(imdbID)
    setClickedModal(true)
  }

  return (
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
                    color='primary'
                    variant='contained'
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
