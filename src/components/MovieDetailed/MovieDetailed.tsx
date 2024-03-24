//Interface
import { MovieDetails } from '../../interface/Movie'

interface MovieDetailedProps {
  movie: MovieDetails
  setChosenMovie: React.Dispatch<React.SetStateAction<MovieDetails | undefined>>
}

const MovieDetailed: React.FC<MovieDetailedProps> = ({
  movie,
  setChosenMovie,
}) => {
  return (
    <>
      <p>{movie.Plot}</p>
      <p onClick={() => setChosenMovie(undefined)}>x</p>
    </>
  )
}

export default MovieDetailed
