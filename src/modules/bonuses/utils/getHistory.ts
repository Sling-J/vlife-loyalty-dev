import { toast } from 'react-toastify'
import i18next from 'i18next'
import { getHistoryByDates } from '../api'

export const getHistory = async (
  fromDate: string,
  toDate: string,
  setHistoryCallback: (history: any[]) => void,
) => {
  try {
    const response = await getHistoryByDates(1, fromDate, toDate)

    if (response.success) {
      setHistoryCallback(response?.data?.bonusesHistory)
    } else {
      toast.error(i18next.t('errors:unknownError'))
    }
  } catch (error) {
    toast.error(i18next.t('errors:unknownError'))
  }
}
