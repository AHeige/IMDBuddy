//React
import React, {
  ReactNode,
  useState,
  createContext,
  SetStateAction,
} from 'react'

//Interface
import { Movie } from '../../interface/Movie'

interface SearchProviderProps {
  children?: ReactNode
}

export interface SearchContextType {
  searchText: string
  setSearchText: React.Dispatch<SetStateAction<string>>
  searchDate: number | null
  setSearchDate: React.Dispatch<SetStateAction<number | null>>
  movies: Movie[] | undefined
  setMovies: React.Dispatch<SetStateAction<Movie[] | undefined>>
  totalPages: number | undefined
  setTotalPages: React.Dispatch<SetStateAction<number | undefined>>
  isLoading: boolean
  setIsLoading: React.Dispatch<SetStateAction<boolean>>
  chosenMovieId: string
  setChosenMovieId: React.Dispatch<SetStateAction<string>>
  clickedModal: boolean
  setClickedModal: React.Dispatch<SetStateAction<boolean>>
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
)

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [movies, setMovies] = useState<Movie[]>()
  const [totalPages, setTotalPages] = useState<number | undefined>()
  const [clickedModal, setClickedModal] = useState<boolean>(false)
  const [chosenMovieId, setChosenMovieId] = useState<string>('')
  const [searchText, setSearchText] = useState('')
  const [searchDate, setSearchDate] = useState<number | null>(null)

  return (
    <SearchContext.Provider
      value={{
        isLoading,
        setIsLoading,
        movies,
        setMovies,
        totalPages,
        setTotalPages,
        clickedModal,
        setClickedModal,
        chosenMovieId,
        setChosenMovieId,
        searchText,
        setSearchText,
        searchDate,
        setSearchDate,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
