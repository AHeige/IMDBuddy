import { useState, useEffect } from 'react'
import { MovieDetails } from '../interface/Movie'

export const useFavourites = () => {
  const [favourites, setFavourites] = useState<MovieDetails[]>([])

  useEffect(() => {
    const storedFavourites = getStoredFavourites()
    if (storedFavourites) {
      setFavourites(storedFavourites)
    }
  }, [])

  const saveFavourite = (movie: MovieDetails) => {
    const updatedFavourites = [movie, ...favourites]
    const stringifiedFavourites = JSON.stringify(updatedFavourites)
    localStorage.setItem('favourites', stringifiedFavourites)
    setFavourites(updatedFavourites)
  }

  const removeFavourite = (id: string) => {
    const updatedFavourites = favourites.filter((fav) => fav.imdbID !== id)
    const stringifiedFavourites = JSON.stringify(updatedFavourites)
    localStorage.setItem('favourites', stringifiedFavourites)
    setFavourites(updatedFavourites)
  }

  const getStoredFavourites = (): MovieDetails[] | null => {
    const storedFavourites = localStorage.getItem('favourites')
    return storedFavourites ? JSON.parse(storedFavourites) : null
  }

  const isFavourite = (id: string) => {
    return favourites.some((fav) => fav.imdbID === id)
  }

  return {
    favourites,
    saveFavourite,
    removeFavourite,
    isFavourite,
  }
}
