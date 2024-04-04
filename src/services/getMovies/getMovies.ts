//Axios
import axios, { AxiosResponse } from 'axios'

//Interface
import { Movie } from '../../interface/Movie'

interface Response {
  Response: string
  Search: Movie[]
  totalResults: string
  Error?: string
}

const getMovies = async (title: string, year: number | null, page: number): Promise<AxiosResponse<Response>> => {
  const token = 'a3c145cf'

  const apiUrl = 'https://www.omdbapi.com/'

  const searchParams = new URLSearchParams({
    s: title,
    ...(year && { y: year.toString() }),
    page: page.toString(),
    apikey: token,
  })

  const queryString = `?${searchParams.toString()}`

  const requestUrl = apiUrl + queryString

  // window.history.pushState(
  //   {},
  //   '',
  //   `${window.location.pathname}?${searchParams.toString()}`
  // )

  try {
    const response: AxiosResponse<Response> = await axios.get(requestUrl)

    return response
  } catch (err) {
    throw new Error(err)
  }
}

export default getMovies
