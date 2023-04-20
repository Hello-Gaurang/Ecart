import axios from 'axios'
import { config } from '../Config'

export const axiosGet = async (url) => {
  try {
    let { data: response } = await axios.get(config.BASE_URL + url)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
  }
}
