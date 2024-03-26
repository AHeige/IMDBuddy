import { useContext } from 'react'
import { FavouritesContext } from '../contexts/FavouriteContext/FavouriteContext'

export const useFavouritesContext = () => {
  const context = useContext(FavouritesContext)
  if (!context) {
    throw new Error('useFavourites context not defined or in wrong scope')
  }
  return context
}
