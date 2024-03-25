//Mui
import Card from '@mui/material/Card'

//Interface
import { Movie } from '../../interface/Movie'
import React from 'react'

interface MovieCardsProps {
  movies: Movie[] | undefined
  isLoading: boolean
  setChosenMovieId: React.Dispatch<React.SetStateAction<string | undefined>>
  setClickedModal: React.Dispatch<React.SetStateAction<boolean>>
}

const MovieList: React.FC<MovieCardsProps> = ({
  movies,
  isLoading,
  setChosenMovieId,
  setClickedModal,
}) => {
  const handleClick = async (imdbID: string) => {
    setChosenMovieId(imdbID)
    setClickedModal(true)
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
