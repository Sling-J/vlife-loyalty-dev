import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { withTranslation, WithTranslation } from 'react-i18next'
import { PromotionsIcon } from 'ui'
import { PromotionsLinkProps } from './types'
import { useStyles } from './styles'

const PromotionsLink: FC<PromotionsLinkProps & WithTranslation> = ({ t }) => {
  const classes = useStyles()

  return (
    <NavLink to={'/promotions'} className={classes.promotions}>
      <div className={classes.titleWrapper}>
        <p className={classes.title}>{t('promotions:promotions')}</p>
        <PromotionsIcon />
      </div>
    </NavLink>
  )
}

export default withTranslation()(PromotionsLink)
