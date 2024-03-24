//Mui
import Card from '@mui/material/Card'

//Services
import getMovieDetails from '../../services/getMovieDetails/getMovieDetails'

//Interface
import { Movie, MovieDetails } from '../../interface/Movie'

interface MovieCardsProps {
  movies: Movie[] | undefined
  isLoading: boolean
  setErrorMsg: React.Dispatch<React.SetStateAction<string | undefined>>
  setChosenMovie: React.Dispatch<React.SetStateAction<MovieDetails | undefined>>
}

const MovieList: React.FC<MovieCardsProps> = ({
  movies,
  isLoading,
  setErrorMsg,
  setChosenMovie,
}) => {
  const handleClick = async (imdbID: string) => {
    try {
      const response = await getMovieDetails(imdbID)
      if (response.data.Response === 'True') {
        setChosenMovie(response.data)
      } else {
        setErrorMsg(response.data.Error)
        throw new Error(response.data.Error)
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <Card>
          {movies &&
            movies.map((movie) => {
              return (
                <p key={movie.imdbID} onClick={() => handleClick(movie.imdbID)}>
                  {movie.Title}
                </p>
              )
            })}
        </Card>
      )}
    </>
  )
}

export default MovieList
