import React, { FC } from 'react'
import clsx from 'clsx'
import format from 'date-fns/format'
import ruLocale from 'date-fns/locale/ru'
import HistoryItem from './HistoryItem'
import { HistoryProps } from './types'
import { useStyles } from './styles'

const History: FC<HistoryProps> = ({ title, dates, className }) => {
  const classes = useStyles()

  const getFormattedDate = (dateString: string) => {
    return format(new Date(dateString.slice(0, 10)), 'dd MMM', {
      locale: ruLocale,
    })
  }

  return (
    <section className={clsx(classes.historyWrapper, className)}>
      <div className={classes.titleWrapper}>
        <h2 className={classes.title}>{title}</h2>
      </div>
      <div className={classes.history}>
        {dates.map((historyDate, index) => (
          <div key={`date${index}`} className={classes.date}>
            <div className={classes.dateTitleWrapper}>
              <p className={classes.dateTitle}>
                {getFormattedDate(historyDate.date)}
              </p>
            </div>
            <div className={classes.dateItemsWrapper}>
              {historyDate.items.map((item, itemIndex) => (
                <HistoryItem key={`historyItem${itemIndex}`} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default History
