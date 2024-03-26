import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { MovieDetails } from '../../interface/Movie'
import getMovieDetails from '../../services/getMovieDetails/getMovieDetails'
import { useFeedbackContext } from '../../hooks/useFeedbackContext'

interface FavouritesContextType {
  favourites: MovieDetails[]
  saveFavourite: (imdbID: string) => Promise<void>
  removeFavourite: (imdbID: string) => void
  isFavourite: (imdbID: string) => boolean
}

export const FavouritesContext = createContext<
  FavouritesContextType | undefined
>(undefined)

interface FavouritesProviderProps {
  children?: ReactNode
}

export const FavouritesProvider: React.FC<FavouritesProviderProps> = ({
  children,
}) => {
  const { setSuccessMessage, setErrorMessage } = useFeedbackContext()

  const [favourites, setFavourites] = useState<MovieDetails[]>([])

  useEffect(() => {
    const storedFavourites = getStoredFavourites()
    if (storedFavourites) {
      setFavourites(storedFavourites)
    }
  }, [])

  const saveFavourite = async (imdbID: string) => {
    try {
      const response = await getMovieDetails(imdbID)
      if (response.data.Response === 'True') {
        const movie = response.data
        const updatedFavourites = [movie, ...favourites]
        const stringifiedFavourites = JSON.stringify(updatedFavourites)
        localStorage.setItem('favourites', stringifiedFavourites)
        setFavourites(updatedFavourites)
        setSuccessMessage('Saved to favourites')
      } else {
        setErrorMessage('Could not save movie as a favourite')
        throw new Error('Could not save movie as a favourite')
      }
    } catch (err) {
      throw new Error('err')
    }
  }

  const removeFavourite = (imdbID: string) => {
    const updatedFavourites = favourites.filter((fav) => fav.imdbID !== imdbID)
    const stringifiedFavourites = JSON.stringify(updatedFavourites)
    localStorage.setItem('favourites', stringifiedFavourites)
    setFavourites(updatedFavourites)
    setSuccessMessage('Removed from favourites')
  }

  const getStoredFavourites = (): MovieDetails[] | null => {
    const storedFavourites = localStorage.getItem('favourites')
    return storedFavourites ? JSON.parse(storedFavourites) : null
  }

  const isFavourite = (imdbID: string) => {
    return favourites.some((fav) => fav.imdbID === imdbID)
  }

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        saveFavourite,
        removeFavourite,
        isFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}
