//Axios
import axios, { AxiosResponse } from 'axios'

//Interface
import { MovieDetails } from '../../interface/Movie'

interface Response extends MovieDetails {
  Response: string
  Error?: string
}

const getMovieDetails = async (
  id: string
): Promise<AxiosResponse<Response>> => {
  const token = 'a3c145cf'

  try {
    const response: AxiosResponse<Response> = await axios.get(
      `http://www.omdbapi.com/?i=${id}&apikey=${token}&`
    )

    return response
  } catch (err) {
    throw new Error(err)
  }
}

export default getMovieDetails
