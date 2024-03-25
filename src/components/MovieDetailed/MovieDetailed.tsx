//Interface
import { useEffect, useState } from 'react'
import { MovieDetails } from '../../interface/Movie'
import getMovieDetails from '../../services/getMovieDetails/getMovieDetails'

//Mui
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Skeleton,
} from '@mui/material'
import { useSearchContext } from '../../hooks/useSearchContext'

const MovieDetailed: React.FC = () => {
  const { clickedModal, chosenMovieId, setErrorMsg, setClickedModal } =
    useSearchContext()

  const [isLoading, setIsLoading] = useState<boolean>(false)
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
  }, [chosenMovieId, clickedModal, setErrorMsg])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
  }

  const handleClose = () => {
    setClickedModal(false)
    setMovieDetails(undefined)
  }

  return (
    clickedModal &&
    chosenMovieId && (
      <Modal open onClose={handleClose}>
        <>
          {isLoading && (
            <Card sx={style} style={{ height: '580px' }}>
              <Skeleton height={200} />
              <CardContent>
                {Array.from({ length: 10 }).map((_, i) => (
                  <Skeleton key={i} />
                ))}
              </CardContent>
              <CardActions>
                <Skeleton width={'15%'} />
              </CardActions>
            </Card>
          )}
          {!isLoading && movieDetails && (
            <Card sx={style}>
              <CardMedia sx={{ height: '200px' }} image={movieDetails.Poster} />
              <CardContent>
                <h3>{movieDetails.Title}</h3>
                <p>{movieDetails.Plot}</p>
                <p>
                  Cast <br /> {movieDetails.Actors}
                </p>
                <p>{movieDetails.Writer}</p>
              </CardContent>
              <CardActions>
                <Button size='small'>Read more</Button>
              </CardActions>
            </Card>
          )}
        </>
      </Modal>
    )
  )
}

export default MovieDetailed
