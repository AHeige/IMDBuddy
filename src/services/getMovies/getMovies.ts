//Axios
import axios, { AxiosResponse } from 'axios'

//Interface
import { Movie } from '../../interface/Movie'

interface Response {
  Response: string
  Search: Movie[]
  totalResoluts: string
  Error?: string
}

const getMovies = async (
  title: string,
  year: number | null
): Promise<AxiosResponse<Response>> => {
  const token = 'a3c145cf'

  try {
    const response: AxiosResponse<Response> = await axios.get(
      `http://www.omdbapi.com/?s=${title}${
        year ? `&y=${year}` : ''
      }&page=1&apikey=${token}&`
    )

    return response
  } catch (err) {
    throw new Error(err)
  }
}

export default getMovies
