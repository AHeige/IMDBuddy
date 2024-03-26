//Mui
import { Grid, Button } from '@mui/material'

//Components
import SearchInput from '../SearchInput/SearchInput'
import YearPicker from '../YearPicker/YearPicker'

//Services
import getMovies from '../../services/getMovies/getMovies'

//Context
import { useSearchContext } from '../../hooks/useSearchContext'
import { useFeedbackContext } from '../../hooks/useFeedbackContext'
import { useNavigate } from 'react-router-dom'

const Search: React.FC = () => {
  const {
    setIsLoading,
    setTotalPages,
    setMovies,
    searchText,
    setSearchText,
    searchDate,
    setSearchDate,
    setTotalResults,
    setSearch,
  } = useSearchContext()

  const { setErrorMessage } = useFeedbackContext()
  const navigate = useNavigate()

  //Calculating pages for Pagination
  const calculatePages = (totalResults: string) => {
    const resultsPerPage = 10
    const total = parseInt(totalResults)
    const pages = Math.ceil(total / resultsPerPage)
    return pages
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setSearch({ title: searchText, year: searchDate })
    navigate('/')
    try {
      const response = await getMovies(searchText, searchDate, 1)
      if (response.data.Response === 'True') {
        setTotalPages(calculatePages(response.data.totalResults))
        setMovies(response.data.Search)
        setTotalResults(Number(response.data.totalResults))
      } else {
        setErrorMessage('No movies found - try another search!')
      }
      setIsLoading(false)
    } catch (err) {
      setErrorMessage(err)
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
