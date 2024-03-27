import { Card, Skeleton, CardContent, CardActions } from '@mui/material'

const MovieDetailsLoading = () => {
  return (
    <Card
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
      }}
      style={{ height: '580px' }}
    >
      <Skeleton height={200} />
      <CardContent>
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </CardContent>
      <CardActions>
        <Skeleton width={'15%'} />
      </CardActions>
    </Card>
  )
}

export default MovieDetailsLoading
