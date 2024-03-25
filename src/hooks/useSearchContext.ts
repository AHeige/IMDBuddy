import { useContext } from 'react'
import { SearchContextType } from '../contexts/SearchContext'

import { SearchContext } from '../contexts/SearchContext'

export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('No context defined')
  }
  return context
}
