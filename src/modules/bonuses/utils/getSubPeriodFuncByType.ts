import { subMonths, subWeeks } from 'date-fns'
import { PeriodTypes } from '../enums'

export const getSubPeriodFuncByType = (periodType: PeriodTypes) => {
  switch (periodType) {
    case PeriodTypes.WEEK:
      return subWeeks
    case PeriodTypes.MONTH:
      return subMonths
  }
}
