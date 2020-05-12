import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon } from '@vlife-grand-era/vlife-storybook'
import { MenuItemLinkProps } from './types'
import { useStyles } from './styles'

const MenuItemLink: FC<MenuItemLinkProps> = ({
  to,
  title,
  bgColor,
  arrowColor,
}) => {
  const classes: any = useStyles({ bgColor })
  return (
    <Link className={classes.menuItemLink} to={to}>
      <p className={classes.title}>{title}</p>
      <ArrowIcon color={arrowColor} />
    </Link>
  )
}

export default MenuItemLink
