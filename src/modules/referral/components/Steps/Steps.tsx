import React, { FC } from 'react'
import clsx from 'clsx'
import { StepsProps } from './types'
import { useStyles } from './styles'

const Steps: FC<StepsProps> = ({ className }) => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.stepsWrapper, className)}>
      <div className={classes.titleWrapper}>
        <p className={classes.title}>Три простых шага:</p>
      </div>
      <div className={classes.steps}>
        <div className={classes.step}>
          <p className={classes.stepNumber}>1</p>
          <p className={classes.stepInfo}>Пригласите друга</p>
        </div>
        <div className={classes.step}>
          <p className={classes.stepNumber}>2</p>
          <p className={classes.stepInfo}>
            Ваш друг делает покупку или платеж в VLIFE
          </p>
        </div>
        <div className={classes.step}>
          <p className={classes.stepNumber}>3</p>
          <p className={classes.stepInfo}>
            Ваш друг получает 500 бонусов, вы получаете 300 бонусов
          </p>
        </div>
      </div>
    </div>
  )
}

export default Steps
