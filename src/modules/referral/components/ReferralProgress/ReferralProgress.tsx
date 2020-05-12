import React, { FC } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { amountWithSpaces } from 'lib/utils'
import { ReferralProgressProps } from './types'
import { useStyles } from './styles'

const ReferralProgress: FC<ReferralProgressProps & WithTranslation> = ({
  peopleAmount,
  moneyAmount,
  t,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.referralProgress}>
      <div className={classes.progressCounts}>
        <div className={classes.peopleAmount}>
          <p className={classes.mainText}>{amountWithSpaces(peopleAmount)}</p>
          <p className={classes.mainSubText}>{t('referral:usersYouInvited')}</p>
        </div>
        <div className={classes.moneyAmount}>
          <p className={classes.mainText}>
            {amountWithSpaces(moneyAmount) + ' ₸'}
          </p>
          <p className={classes.mainSubText}>{t('referral:moneyYouEarned')}</p>
        </div>
      </div>
      <div className={classes.dividerWrapper}>
        <hr className={classes.divider} />
      </div>
      <div className={classes.infoWrapper}>
        <p className={classes.info}>{t('referral:invitedUserInfo')}</p>
      </div>
    </div>
  )
}

export default withTranslation()(ReferralProgress)
