import React, { FC } from 'react'
import clsx from 'clsx'
import { Condition } from '@vlife-grand-era/vlife-storybook'
import { amountWithSpaces } from 'lib/utils'
import { HistoryItemProps } from './types'
import { useStyles } from './styles'

const HistoryItem: FC<HistoryItemProps> = ({ title, subTitle, amount }) => {
  const classes = useStyles()
  const amountClasses = {
    [classes.income]: amount > 0,
    [classes.charges]: amount < 0,
  }

  return (
    <div className={classes.historyItem}>
      <div className={classes.historyItemTitleWrapper}>
        <p className={classes.historyItemTitle}>{title}</p>
        <p className={clsx(classes.historyItemAmount, amountClasses)}>
          {amountWithSpaces(amount, true)}
        </p>
      </div>
      <Condition match={subTitle}>
        <div className={classes.historyItemSubtitleWrapper}>
          <p className={classes.historyItemSubtitle}>{subTitle}</p>
        </div>
      </Condition>
    </div>
  )
}

export default HistoryItem
