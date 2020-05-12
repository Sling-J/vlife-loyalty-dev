import React, { FC } from 'react'
import { PillTabProps } from '../types'
import { useStyles } from './styles'

const PillTab: FC<PillTabProps> = ({ title, onTabClick, value, isActive }) => {
  const classes = useStyles({ isActive })
  const onCurrentTabClick = () => {
    onTabClick(value)
  }
  return (
    <div onClick={onCurrentTabClick} className={classes.pillTab}>
      <p className={classes.tabTitle}>{title}</p>
    </div>
  )
}

export default PillTab
