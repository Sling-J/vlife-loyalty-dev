import React, { FC, useEffect, useState } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Condition } from '@vlife-grand-era/vlife-storybook/build'
import { RootState } from 'store/rootReducer'
import { ShareButton, PageHeader } from 'ui'
import { QrCode, ReferralProgress, Steps } from '../../components'
import { ReferralProps } from './types'
import { useStyles } from './styles'

const Referral: FC<ReferralProps & WithTranslation & RootState> = ({
  t,
  common,
}) => {
  const classes = useStyles()
  const [refLink, setRefLink] = useState('')

  useEffect(() => {
    if (common?.clpInfo?.referralLink) {
      setRefLink(common?.clpInfo?.referralLink)
    }
  }, [common?.clpInfo?.referralLink])

  return (
    <main className={classes.referralPage}>
      <PageHeader
        title={t('referral:inviteFriend')}
        className={classes.header}
        backButtonClassName={classes.backButton}
        hasBackButton
      />
      <QrCode link={refLink} />
      <Steps className={classes.refSteps} />
      <Condition match={refLink}>
        <div className={classes.shareButtonWrapper}>
          <ShareButton text={t('referral:sendToFriend')} link={refLink} />
        </div>
      </Condition>
      <ReferralProgress peopleAmount={12} moneyAmount={6000} />
    </main>
  )
}

export default withTranslation()(Referral)
