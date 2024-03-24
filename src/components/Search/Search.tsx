//React
import { useState } from 'react'

//Mui
import { Grid, Button } from '@mui/material'

//Components
import SearchInput from '../SearchInput/SearchInput'
import YearPicker from '../YearPicker/YearPicker'

//Services
import getMovies from '../../services/getMovies/getMovies'

//Intercaes
import { Movie } from '../../interface/Movie'

interface SearchProps {
  movieData: (data: Movie[]) => void
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setErrorMsg: React.Dispatch<React.SetStateAction<string | undefined>>
}

const Search: React.FC<SearchProps> = ({
  movieData,
  setIsLoading,
  setErrorMsg,
}) => {
  //State management
  const [searchText, setSearchText] = useState('')
  const [searchDate, setSearchDate] = useState<number | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    event.preventDefault()
    try {
      const response = await getMovies(searchText, searchDate)
      if (response.data.Response === 'True') {
        movieData(response.data.Search)
      } else {
        setErrorMsg(response.data.Error)
        movieData([])
      }
      setIsLoading(false)
    } catch (err) {
      throw new Error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container flexDirection={'row'} spacing={'1em'}>
        <SearchInput
          value={searchText}
          onChange={(newText) => {
            setSearchText(newText)
          }}
        />
        {/* A date picker where user can choose a year */}
        <YearPicker
          onChange={(newDate) => {
            setSearchDate(newDate)
          }}
          value={searchDate}
        />
        <Grid item>
          {/* Submit button */}
          <Button
            aria-label='Submit search'
            disabled={!searchText}
            type='submit'
            variant='contained'
            color='primary'
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Search
