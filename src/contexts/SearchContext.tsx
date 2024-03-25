import { createContext, SetStateAction } from 'react'
import { Movie } from '../interface/Movie'

export interface SearchContextType {
  searchText: string
  setSearchText: React.Dispatch<SetStateAction<string>>
  searchDate: number | null
  setSearchDate: React.Dispatch<SetStateAction<number | null>>
  movies: Movie[] | undefined
  setMovies: React.Dispatch<SetStateAction<Movie[] | undefined>>
  errorMsg: string | undefined
  setErrorMsg: React.Dispatch<SetStateAction<string | undefined>>
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
