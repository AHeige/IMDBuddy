//React
import React, { ReactNode, useState } from 'react'

//Interface
import { Movie } from '../interface/Movie'

//Context
import { SearchContext } from './SearchContext'

interface SearchProviderProps {
  children?: ReactNode
}

const SearchContextProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string | undefined>()
  const [movies, setMovies] = useState<Movie[]>()
  const [totalPages, setTotalPages] = useState<number | undefined>()
  const [clickedModal, setClickedModal] = useState<boolean>(false)
  const [chosenMovieId, setChosenMovieId] = useState<string>('')

  return (
    <SearchContext.Provider
      value={{
        isLoading,
        setIsLoading,
        errorMsg,
        setErrorMsg,
        movies,
        setMovies,
        totalPages,
        setTotalPages,
        clickedModal,
        setClickedModal,
        chosenMovieId,
        setChosenMovieId,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
