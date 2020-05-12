import React, { FC } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { getClubNameByStatus } from '../../utils'
import { StatusProgressProps } from './types'
import { useStyles } from './styles'

const StatusProgress: FC<StatusProgressProps & WithTranslation> = ({
  t,
  nextStatus,
  remainingPercent,
}) => {
  const classes: any = useStyles({ hasStatus: Boolean(nextStatus) })
  const progressPercent = 100 - remainingPercent

  return (
    <div className={classes.wrapper}>
      <div className={classes.progressBlock}>
        <div className={classes.imgWrapper}>
          <img
            className={classes.img}
            src='https://24smi.org/public/media/celebrity/2019/03/28/jvzb8jxagcwq-aiia-shalkar.jpg'
            alt='profilePhoto'
            style={{ left: `calc(${progressPercent}% - 24px)` }}
          />
        </div>
        <div className={classes.progressBar}>
          <div
            className={classes.progressBarFill}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className={classes.infoWrapper}>
          <div className={classes.progressInfo}>
            <p className={classes.yourProgress}>{t('yourProgress')}</p>
            <p className={classes.status}>{getClubNameByStatus(nextStatus)}</p>
          </div>
          <div className={classes.remainInfo}>
            <p>{`${t('remained')} ${remainingPercent}%`}</p>
          </div>
        </div>
      </div>
      {/* TODO Uncomment when finances will make transaction history */}
      {/*<div className={classes.linkWrapper}>*/}
      {/*  <MenuItemLink*/}
      {/*    bgColor={'#F5F5F5'}*/}
      {/*    to={'/bonuses'}*/}
      {/*    title={t('transactionsHistory')}*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  )
}

export default withTranslation()(StatusProgress)
