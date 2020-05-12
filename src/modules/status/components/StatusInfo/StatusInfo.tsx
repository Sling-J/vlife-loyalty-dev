import React, { FC } from 'react'
import { StatusInfoProps } from './types'
import { useStyles } from './styles'

const StatusInfo: FC<StatusInfoProps> = ({ info }) => {
  const classes: any = useStyles({ hasInfo: Boolean(info) })

  return (
    <div className={classes.statusInfoWrapper}>
      <p className={classes.statusInfo}>{info}</p>
    </div>
  )
}

export default StatusInfo
