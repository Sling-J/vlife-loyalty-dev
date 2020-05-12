import React, { FC, useState } from 'react'
import clsx from 'clsx'
import { withTranslation, WithTranslation } from 'react-i18next'
import { ArrowIcon } from '@vlife-grand-era/vlife-storybook'
import { RootState } from 'store/rootReducer'
import { amountWithSpaces, redirectToSpinner } from 'lib/utils'
import { History, PageHeader, PillTabs, PageWithMobileNav } from 'ui'
import { PeriodTypes } from '../../enums'
import { getPeriodicHistoryFn } from '../../utils'
import { periodTabs } from './periodTabs'
import { BonusesProps } from './types'
import { useStyles } from './styles'

const Bonuses: FC<BonusesProps & WithTranslation & RootState> = ({
   t,
   common,
 }) => {
  const [history, setHistory] = useState([])
  const classes: any = useStyles({ hasHistory: Boolean(history.length) })
  const getHistoryByPeriod = getPeriodicHistoryFn(setHistory)

  const onActiveTabChange = (value: string) => {
    switch (value) {
      case 'one_week':
        getHistoryByPeriod(PeriodTypes.WEEK, 1)
        break
      case 'one_month':
        getHistoryByPeriod(PeriodTypes.MONTH, 1)
        break
      case 'three_months':
        getHistoryByPeriod(PeriodTypes.MONTH, 3)
        break
      case 'six_months':
        getHistoryByPeriod(PeriodTypes.MONTH, 6)
        break
    }
  }
  return (
    <PageWithMobileNav>
      <main className={classes.bonusesPage}>
        <PageHeader className={classes.header} hasBackButton/>
        <div className={classes.titleWrapper}>
          <h1 className={classes.title}>{t('bonuses:myBonuses')}</h1>
        </div>
        <div className={classes.availableAmountWrapper}>
          <p className={classes.amount}>{t('available') + ':'}</p>
          <p className={clsx(classes.amount, classes.bold)}>
            {amountWithSpaces(common?.clpInfo?.bonusesAmount)}
          </p>
        </div>
        <div className={classes.buttonWrapper}>
          <button className={classes.button} onClick={redirectToSpinner}>
            <p className={classes.buttonText}>{t('bonuses:spendMyBonuses')}</p>
            <ArrowIcon color='#4D77FB'/>
          </button>
        </div>
        <div className={classes.tabs}>
          <PillTabs tabs={periodTabs} onActiveTabChange={onActiveTabChange}/>
        </div>
        <History
          className={classes.history}
          dates={history}
          title={t('bonuses:myBonuses')}
        />
      </main>
    </PageWithMobileNav>
  )
}

export default withTranslation()(Bonuses)
