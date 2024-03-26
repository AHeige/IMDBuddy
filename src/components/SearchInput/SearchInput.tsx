import { Grid, Input } from '@mui/material'

interface SearchInputProps {
  value: string
  onChange: (newText: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <Grid item>
      <Input
        aria-label='Search movies'
        autoFocus
        type='text'
        className='search-input'
        value={value}
        onChange={(value) => onChange(value.target.value)}
        placeholder='Search...'
      />
    </Grid>
  )
}

export default SearchInput
