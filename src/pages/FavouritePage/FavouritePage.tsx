//Mui
import Grid from '@mui/material/Grid'
import Badge from '@mui/material/Badge'
import Chip from '@mui/material/Chip'

//Components
import MovieListContent from '../../components/MovieList/components/MovieListContent'

//Context
import { useFavouritesContext } from '../../hooks/useFavouritesContext'
import { sampleMovie } from '../../constants/sampleMovie'
import { Typography } from '@mui/material'

const FavouritePage: React.FC = () => {
  const { favourites } = useFavouritesContext()

  return (
    <Grid
      container
      style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5em' }}
      spacing={2}
    >
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
        <Badge badgeContent={favourites.length} color='info'>
          <Chip color='default' label='Favourites' />
        </Badge>
      </Grid>
      <MovieListContent movies={favourites} />
      {/* If no favourites are set a sample movie is shown */}
      {favourites.length === 0 && (
        <>
          <Grid
            item
            xs={12}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Typography>
              Use the heart 💖 to 'like' a movie and save it here.
              <br />
              <br />
              Maybe try on this one?
            </Typography>
          </Grid>

          <MovieListContent movies={[sampleMovie]} />
        </>
      )}
     
    </Grid>
  )
}

export default FavouritePage
