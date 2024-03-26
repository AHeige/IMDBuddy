//Mui
import { Grid, Skeleton, CardContent, CardActions } from '@mui/material'

const MovieListSkeleton = () => {
  return (
    <>
      {/* Skeleton for loading effect */}
      {Array.from({ length: 10 }).map((_, i) => {
        return (
          <Grid item key={i}>
            <Skeleton
              sx={{ padding: 0, margin: 0 }}
              width={'350px'}
              height={'140px'}
              animation="wave"
            />
            <CardContent>
              <Skeleton />
            </CardContent>
            <CardActions>
              <Skeleton width={'20%'} />
            </CardActions>
          </Grid>
        )
      })}
    </>
  )
}

export default MovieListSkeleton
