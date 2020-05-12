import React, { FC } from 'react'
import clsx from 'clsx'
import { Link, LinkProps } from 'react-router-dom'
import { CardProps, Card } from 'ui'
import { CardLinkProps } from './types'
import { useStyles } from './styles'

const CardLink: FC<LinkProps & CardProps & CardLinkProps> = ({
  to,
  linkClassName,
  ...props
}) => {
  const classes = useStyles()

  return (
    <Link to={to} className={clsx(classes.cardLink, linkClassName)}>
      <Card {...props} />
    </Link>
  )
}

export default CardLink
