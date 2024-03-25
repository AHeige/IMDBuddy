//Interface
import { useEffect, useState } from 'react'
import { MovieDetails } from '../../interface/Movie'
import getMovieDetails from '../../services/getMovieDetails/getMovieDetails'

//Mui
import { Modal, Paper } from '@mui/material'

interface MovieDetailedProps {
  chosenMovieId: string
  setErrorMsg: React.Dispatch<React.SetStateAction<string | undefined>>
  clickedModal: boolean
  setClickedModal: React.Dispatch<React.SetStateAction<boolean>>
}

const MovieDetailed: React.FC<MovieDetailedProps> = ({
  chosenMovieId,
  setErrorMsg,
  clickedModal,
  setClickedModal,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [movieDetails, setMovieDetails] = useState<MovieDetails | undefined>(
    undefined
  )

  useEffect(() => {
    if (!clickedModal) {
      return
    }
    const requstDetails = async () => {
      setIsLoading(true)

      try {
        const response = await getMovieDetails(chosenMovieId)
        if (response.data.Response === 'True') {
          setIsLoading(false)
          setMovieDetails(response.data)
        } else {
          setIsLoading(false)
          setErrorMsg(response.data.Error)
          throw new Error(response.data.Error)
        }
      } catch (err) {
        setIsLoading(false)
        setErrorMsg('An error occured when requesting movie details')
        throw new Error(err)
      }
    }

    requstDetails()

    return () => {
      setIsLoading(true)
    }
  }, [chosenMovieId, setErrorMsg, clickedModal])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    background: 'no-repeat',
    backgroundSize: 'cover',
    boxShadow: 24,
    p: 4,
  }

  const handleClose = () => {
    setClickedModal(false)
    setMovieDetails(undefined)
  }

  return (
    clickedModal && (
      <Modal open onClose={handleClose}>
        <>
          {isLoading && (
            <Paper sx={style} style={{ backgroundImage: 'none' }}>
              <p style={{ textAlign: 'center' }}>Loading</p>
            </Paper>
          )}
          {!isLoading && movieDetails && (
            <Paper
              sx={style}
              style={{ backgroundImage: `url(${movieDetails.Poster})` }}
            >
              <p>
                {movieDetails.Title} - {movieDetails.Year}
              </p>
              <p>{movieDetails.Plot}</p>
              {/* <img src={movieDetails.Poster} /> */}
              <p>{movieDetails.Actors}</p>
            </Paper>
          )}
        </>
      </Modal>
    )
  )
}

export default MovieDetailed
