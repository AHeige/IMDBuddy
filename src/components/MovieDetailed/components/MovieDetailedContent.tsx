//Mui
import {
  Card,
  CardMedia,
  Box,
  CardActions,
  CardContent,
  Chip,
  Button,
  Stack,
} from '@mui/material'

//Interface
import { MovieDetails } from '../../../interface/Movie'
import LikeButton from '../../LikeButton/LikeButton'

interface MovieDetailedContentProps {
  movieDetails: MovieDetails
  handleClose: () => void
}

const MovieDetailedContent: React.FC<MovieDetailedContentProps> = ({
  movieDetails,
  handleClose,
}) => {
  return (
    <Card
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
      }}
    >
      <CardMedia sx={{ height: '200px' }} image={movieDetails.Poster}>
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
            }}
          >
            <LikeButton imdbID={movieDetails.imdbID} />
          </CardActions>
        </Box>
      </CardMedia>
      <CardContent>
        <Stack spacing={{ xs: 1 }} direction='row' useFlexGap flexWrap='wrap'>
          <Chip
            color={Number(movieDetails.imdbRating) > 6 ? 'success' : 'warning'}
            label={movieDetails.imdbRating + '/10'}
            aria-label='IMDB Rating'
            title='IMDB Rating'
          />
          <Chip
            color='default'
            label={movieDetails.Year}
            aria-label='Release year'
            title='Release year'
          />
          <Chip
            color='default'
            label={movieDetails.Type.toUpperCase()}
            aria-label='Type'
            title='Type'
          />
          <Chip
            color='default'
            label={movieDetails.Runtime.toUpperCase()}
            aria-label='Run time'
            title='Run time'
          />
          <Chip
            color='default'
            label={movieDetails.Director.toUpperCase()}
            aria-label='Director'
            title='Director'
          />
        </Stack>
        <h3>{movieDetails.Title}</h3>

        <p>{movieDetails.Plot}</p>
        <p>
          Cast <br/>
          {movieDetails.Actors}
        </p>
      </CardContent>
      <CardActions>
        <Button onClick={handleClose}>Close</Button>
      </CardActions>
    </Card>
  )
}

export default MovieDetailedContent
