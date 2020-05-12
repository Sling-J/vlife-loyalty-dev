import React, { FC } from 'react'
import clsx from 'clsx'
import { withTranslation, WithTranslation } from 'react-i18next'
import { MenuItemLink } from 'ui'
import { Benefit } from '../Benefit'
import { BenefitsSwiperProps } from '../types'
import { useStyles } from './styles'

const BenefitsSwiper: FC<BenefitsSwiperProps & WithTranslation> = ({
  benefits,
  className,
  t,
}) => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.benefitsWrapper, className)}>
      <div className={classes.titleWrapper}>
        <h2 className={classes.title}>Мои бенефиты</h2>
      </div>
      <div className={classes.benefits}>
        {benefits.map((benefit, index) => (
          <Benefit
            className={classes.swipeItem}
            key={`Benefit${index}`}
            {...benefit}
          />
        ))}
      </div>
      <div className={classes.linkWrapper}>
        <MenuItemLink
          bgColor={'#F5F5F5'}
          to={'/all-benefits'}
          title={t('status:seeAllBenefits')}
        />
      </div>
    </div>
  )
}

export default withTranslation()(BenefitsSwiper)
