import { GET_REQUEST } from 'lib/api'

export const getClpInfoById = (id: number): Promise<any> =>
  GET_REQUEST(`/user/${id}`)
