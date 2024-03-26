import { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext/SearchContext'

export const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearchContext not defind or in the wrong scope')
  }
  return context
}
