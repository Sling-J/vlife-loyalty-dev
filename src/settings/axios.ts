import axios, { AxiosInstance } from 'axios'

const axiosConfig: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    common: {
      Authorization: 'Some Bearer Token',
    },
  },
})

export default axiosConfig
