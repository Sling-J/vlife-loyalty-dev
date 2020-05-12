import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { withTranslation, WithTranslation } from 'react-i18next'
import {
  BackButton,
  QuestionButton,
  Condition,
} from '@vlife-grand-era/vlife-storybook'
import { getClubNameByStatus } from '../../utils'
import { StatusHeaderProps } from './types'
import { useStyles } from './styles'

const StatusHeader: FC<StatusHeaderProps & WithTranslation> = ({
  bgColor,
  bgImgSrc,
  t,
  status,
}) => {
  const classes: any = useStyles({ bgColor, bgImgSrc })
  const router = useHistory()

  const onBackButtonClick = () => {
    router.push('/main')
  }

  return (
    <div className={classes.statusHeaderWrapper}>
      <div className={classes.buttonsWrapper}>
        <BackButton
          bgColor={'rgba(51, 51, 51, 0.05)'}
          onButtonClick={onBackButtonClick}
        />
        <QuestionButton
          bgColor={'rgba(51, 51, 51, 0.05)'}
          onButtonClick={null}
        />
      </div>
      <Condition match={status}>
        <div className={classes.statusWrapper}>
          <p className={classes.title}>{t('myStatus')}</p>
          <p className={classes.subtitle}>{getClubNameByStatus(status)}</p>
        </div>
      </Condition>
    </div>
  )
}

export default withTranslation()(StatusHeader)
