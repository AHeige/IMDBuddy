//Components
import MovieList from '../../components/MovieList/MovieList'
import MovieDetailed from '../../components/MovieDetailed/MovieDetailed'

const LandingPage: React.FC = () => {

  
  return (
    <>

      <MovieList />
      
      {/* Detailed view of one movie */}
      <MovieDetailed />
    </>
  )
}

export default LandingPage
