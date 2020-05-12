import React, { FC } from 'react'
import clsx from 'clsx'
import { BenefitProps } from '../types'
import { useStyles } from './styles'

const Benefit: FC<BenefitProps> = ({
  title,
  imgSrc,
  link,
  merchantLogoSrc,
  status,
  className,
  disabledStatus,
}) => {
  const classes: any = useStyles({ hasShadow: status === disabledStatus })

  return (
    <a href={link} className={clsx(classes.benefitWrapper, className)}>
      <div className={classes.benefit}>
        <img className={classes.benefitImg} src={imgSrc} alt={title} />
        <p className={classes.benefitTitle}>{title}</p>
        <img
          className={classes.merchantLogo}
          src={merchantLogoSrc}
          alt='merchantLogo'
        />
      </div>
    </a>
  )
}

export default Benefit
