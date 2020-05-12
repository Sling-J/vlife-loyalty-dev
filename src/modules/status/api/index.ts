import { GET_REQUEST } from 'lib/api'

export const getClubInfoByStatus = (status: string): Promise<any> =>
  GET_REQUEST(`/user/club`, { status })
