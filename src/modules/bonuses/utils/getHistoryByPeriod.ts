import { PeriodTypes } from '../enums'
import { getSubPeriodFuncByType } from './getSubPeriodFuncByType'
import { getDefaultDateFormat } from 'lib/utils'
import { getHistory } from './getHistory'

export const getHistoryByPeriod = (
  periodType: PeriodTypes,
  periodAmount: number,
  setHistoryCallback: (history: any[]) => void,
) => {
  const today = new Date()
  const periodTypeFunc = getSubPeriodFuncByType(periodType)

  const periodAgo = periodTypeFunc(today, periodAmount)
  const fromDate = getDefaultDateFormat(periodAgo)
  const toDate = getDefaultDateFormat(today)

  getHistory(fromDate, toDate, setHistoryCallback)
}

export const getPeriodicHistoryFn = (
  setHistoryCallback: (history: any[]) => void,
) => {
  return (periodType: PeriodTypes, periodAmount) =>
    getHistoryByPeriod(periodType, periodAmount, setHistoryCallback)
}
