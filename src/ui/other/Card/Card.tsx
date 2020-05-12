import React, { FC } from 'react'
import clsx from 'clsx'
import { ArrowIcon, Condition } from '@vlife-grand-era/vlife-storybook'
import {
  getWrapperMaxWidth,
  getTitleStyles,
  getSubtitleStyles,
} from './helpers'
import { CardProps, CardType } from './types'
import { useStyles } from './styles'

const Card: FC<CardProps> = ({
  title,
  subtitle,
  info,
  className,
  bgImgSrc,
  bgColor,
  textColor,
  type,
}) => {
  const classes: any = useStyles({
    bgImgSrc,
    bgColor,
    textColor,
    hasSubtitle: Boolean(subtitle),
    hasInfo: Boolean(info),
    wrapperMaxWidth: getWrapperMaxWidth(type),
    titleStyles: getTitleStyles(type),
    subtitleStyles: getSubtitleStyles(type),
  })

  return (
    <div className={clsx(classes.cardLinkWrapper, className)}>
      <div className={classes.titleWrapper}>
        <p className={classes.title}>{title}</p>
        <ArrowIcon color={textColor || '#212121'} />
      </div>
      <Condition match={subtitle}>
        <div className={classes.subtitleWrapper}>
          <p className={classes.subtitle}>{subtitle}</p>
        </div>
      </Condition>
      <Condition match={info}>
        <div className={classes.infoWrapper}>
          <p className={classes.info}>{info}</p>
        </div>
      </Condition>
    </div>
  )
}

Card.defaultProps = {
  type: CardType.MEDIUM,
}

export default Card
