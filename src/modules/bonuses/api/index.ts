import { GET_REQUEST } from 'lib/api'

export const getHistoryByDates = (
  id: number,
  fromDate: string = '',
  toDate: string = '',
): Promise<any> => GET_REQUEST(`/${id}/bonuses/history`, { fromDate, toDate })
