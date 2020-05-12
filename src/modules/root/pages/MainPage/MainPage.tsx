import React, { FC, useEffect, useState } from 'react'
import { withTranslation, TransProps } from 'react-i18next'
import { RootState } from 'store/rootReducer'
import { amountWithSpaces, toNormalCase, shareOrCopy } from 'lib/utils'
import {
  CardLink,
  CardButton,
  CardType,
  PageWithMobileNav,
  PageHeader,
} from 'ui'
import { MainPageProps } from './types'
import { useStyles } from './styles'

const MainPage: FC<MainPageProps & TransProps & RootState> = ({
  t,
  common,
}) => {
  const classes = useStyles()
  const [bonusesAmountSubtitle, setBonusesAmountSubtitle] = useState('')
  const [club, setClub] = useState('')

  useEffect(() => {
    const { bonusesAmount } = common?.clpInfo
    if (bonusesAmount) {
      setBonusesAmountSubtitle(
        `${amountWithSpaces(bonusesAmount)} ${t('bonuses:bonusesAmount')}`,
      )
    }
  }, [common?.clpInfo?.bonusesAmount])

  useEffect(() => {
    const { status } = common?.clpInfo
    if (status) {
      setClub(toNormalCase(status))
    }
  }, [common?.clpInfo?.status])

  const onShare = () => {
    shareOrCopy('VLife', 'Join the VLife!', common?.clpInfo?.referralLink)
  }

  return (
    <PageWithMobileNav>
      <main className={classes.mainPage}>
        <PageHeader title={t('vLifeClub')} withPhoto />
        <div className={classes.contentWrapper}>
          <CardLink
            title={t('myStatus')}
            subtitle={club}
            to={'/status'}
            bgColor={
              'linear-gradient(0deg, #FBD24D, #FBD24D), linear-gradient(0deg, #FFD700, #FFD700), linear-gradient(0deg, #EAD273, #EAD273), linear-gradient(0deg, #F3E5AD, #F3E5AD), linear-gradient(57.24deg, #EEDA98 0%, #FCF6DB 100%)'
            }
            linkClassName={classes.linkWithMb}
          />
          <CardLink
            title={t('bonuses:myBonuses')}
            subtitle={bonusesAmountSubtitle}
            info={'* 1 бонус = 1 тенге'}
            to={'/bonuses'}
            linkClassName={classes.linkWithMb}
          />
          <div className={classes.shareLinks}>
            <CardLink
              title={t('referral:inviteFriend')}
              subtitle={`+300 ${t('bonuses:bonusesAmount')}`}
              to={'/referral'}
              bgColor={'linear-gradient(0deg, #8BC34A, #8BC34A), #9CCC65'}
              textColor={'#FFFFFF'}
              type={CardType.SMALL}
              linkClassName={classes.inviteFriendLink}
            />
            <CardButton
              onButtonClick={onShare}
              title={t('referral:shareInSocialNetworks')}
              subtitle={`+300 ${t('bonuses:bonusesAmount')}`}
              bgColor={'#7B4DFB'}
              textColor={'#FFFFFF'}
              type={CardType.SMALL}
              buttonClassName={classes.shareButton}
            />
          </div>
          <CardLink
            title={t('gifts:gifts')}
            to={'/gifts'}
            bgColor={'#4D77FB'}
            textColor={'#FFFFFF'}
          />
        </div>
      </main>
    </PageWithMobileNav>
  )
}

export default withTranslation()(MainPage)
