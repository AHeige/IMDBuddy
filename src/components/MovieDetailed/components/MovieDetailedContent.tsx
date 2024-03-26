//Mui
import {
  Card,
  CardMedia,
  Box,
  CardActions,
  CardContent,
  Chip,
} from '@mui/material'

//Interface
import { MovieDetails } from '../../../interface/Movie'
import LikeButton from '../../LikeButton/LikeButton'

interface MovieDetailedContentProps {
  movieDetails: MovieDetails
}

const MovieDetailedContent: React.FC<MovieDetailedContentProps> = ({
  movieDetails,
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
        <Chip
          color={Number(movieDetails.imdbRating) > 6 ? 'success' : 'warning'}
          label={movieDetails.imdbRating + '/10'}
          aria-label='IMDB Rating'
          title='IMDB Rating'
        />
        <Chip
          sx={{ marginLeft: 1 }}
          color='default'
          label={movieDetails.Year}
          aria-label='Release year'
          title='Release year'
        />
        <Chip
          sx={{ marginLeft: 1 }}
          color='default'
          label={movieDetails.Type.toUpperCase()}
          aria-label='Release year'
          title='Release year'
        />
        <h3>{movieDetails.Title}</h3>

        <p>{movieDetails.Plot}</p>
        <p>
          Cast <br /> {movieDetails.Actors}
        </p>
        <p>{movieDetails.Writer}</p>
      </CardContent>
    </Card>
  )
}

export default MovieDetailedContent
