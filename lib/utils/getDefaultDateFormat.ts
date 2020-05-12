import format from 'date-fns/format'

export const getDefaultDateFormat = (date: Date) => format(date, 'dd-MM-yyyy')
