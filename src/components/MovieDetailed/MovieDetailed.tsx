import { useEffect, useState } from 'react'
//Interface
import { MovieDetails } from '../../interface/Movie'

//Services
import getMovieDetails from '../../services/getMovieDetails/getMovieDetails'

//Mui
import { Modal } from '@mui/material'

//Context
import { useSearchContext } from '../../hooks/useSearchContext'
import { useFeedbackContext } from '../../hooks/useFeedbackContext'

//Components
import MovieDetailedContent from './components/MovieDetailedContent'
import MovieDetailsLoading from './components/MovieDetailsLoading'

/**
 * @description Detailed view of a movie
 * @returns {ReactNode} A react element returning a Modal
 */
const MovieDetailed: React.FC = () => {
  const { clickedModal, chosenMovieId, setClickedModal } = useSearchContext()

  const { setErrorMessage } = useFeedbackContext()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [movieDetails, setMovieDetails] = useState<MovieDetails | undefined>(undefined)

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
          setErrorMessage("Could not load movie details.")
          handleClose()
          throw new Error(response.data.Error)
        }
      } catch (err) {
        handleClose()
        setIsLoading(false)
        setErrorMessage('Could not load movie details. Check your internet connection and try again.')
        throw new Error(err)
      }
    }

    requstDetails()
  }, [chosenMovieId, clickedModal, setErrorMessage])

  const handleClose = () => {
    setClickedModal(false)
    setMovieDetails(undefined)
  }

  return (
    clickedModal &&
    chosenMovieId && (
      <Modal open onClose={handleClose}>
        <>
          {isLoading && <MovieDetailsLoading />}
          {!isLoading && movieDetails && <MovieDetailedContent movieDetails={movieDetails} handleClose={handleClose} />}
        </>
      </Modal>
    )
  )
}

export default MovieDetailed
