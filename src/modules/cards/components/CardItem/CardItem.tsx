import React, { FC } from 'react'
import clsx from 'clsx'
import { ArrowIcon } from '@vlife-grand-era/vlife-storybook'
import { CardItemProps } from './types'
import { useStyles } from './styles'

const CardItem: FC<CardItemProps> = ({
  className,
  title,
  subtitle,
  img,
  bonusesAmount,
}) => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.cardItem, className)}>
      <img className={classes.img} src={img} alt={title} />
      <div className={classes.info}>
        <p className={classes.title}>{title}</p>
        <p className={classes.subtitle}>{subtitle}</p>
      </div>
      <p className={classes.bonusesAmount}>{`${bonusesAmount} б.`}</p>
      <ArrowIcon className={classes.arrowIcon} color={'#BDBDBD'} />
    </div>
  )
}

export default CardItem
