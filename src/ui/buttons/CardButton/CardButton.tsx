import React, { FC } from 'react'
import clsx from 'clsx'
import { CardProps, Card } from '../../other'
import { CardButtonProps } from './types'
import { useStyles } from './styles'

const CardButton: FC<CardButtonProps & CardProps> = ({
  onButtonClick,
  buttonClassName,
  ...props
}) => {
  const classes = useStyles()

  return (
    <button
      className={clsx(classes.cardButton, buttonClassName)}
      onClick={onButtonClick}
    >
      <Card {...props} />
    </button>
  )
}

export default CardButton
