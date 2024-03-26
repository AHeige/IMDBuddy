//Context
import { useFavouritesContext } from '../../hooks/useFavouritesContext'

//Mui
import { Tooltip, IconButton } from '@mui/material'

//Icons
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteIconBorder from '@mui/icons-material/FavoriteBorder'

interface LikeButtonProps {
  imdbID: string
}

const LikeButton: React.FC<LikeButtonProps> = ({ imdbID }) => {
  const { isFavourite, removeFavourite, saveFavourite } = useFavouritesContext()

  return (
    <>
      {isFavourite(imdbID) ? (
        <Tooltip title={'Remove from favourites'}>
          <IconButton
            onClick={() => removeFavourite(imdbID)}
            aria-label='remove from favorites'
          >
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title={'Add to favourites'}>
          <IconButton
            onClick={() => saveFavourite(imdbID)}
            aria-label='add to favorites'
          >
            <FavoriteIconBorder />
          </IconButton>
        </Tooltip>
      )}
    </>
  )
}

export default LikeButton
