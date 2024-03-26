import axios from 'axios'
import getMovies from './getMovies'
import { Movie } from '../../interface/Movie'

interface Response {
  Response: string
  Search: Movie[]
  totalResults: string
  Error?: string
}

jest.mock('axios')

describe('getMovies service', () => {
  it('Should return movies', async () => {
    const mockFakeMovies: Response = {
      Response: 'True',
      Search: [
        {
          Title: 'Star Wars',
          imdbID: '1234',
          Poster: 'img.jpg',
          Type: 'movie',
          Year: '1977',
        },
      ],
      totalResults: '1',
    }

    const mock = () => {
      (
        axios.get as jest.MockedFunction<typeof axios.get>
      ).mockResolvedValueOnce(mockFakeMovies)
    }

    mock()

    const result = await getMovies('Star Wars', 1977, 1)
    expect(result).toEqual(mockFakeMovies)
  })
})
