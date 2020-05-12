import React, { FC } from 'react'
import { BenefitsGridProps } from '../types'
import { Benefit } from '../Benefit'
import { useStyles } from './styles'

const BenefitsGrid: FC<BenefitsGridProps> = ({ benefits, disabledStatus }) => {
  const classes = useStyles()

  return (
    <section className={classes.benefitsGrid}>
      {benefits.map((benefit, index) => (
        <Benefit
          className={classes.gridItem}
          key={`Benefit${index}`}
          disabledStatus={disabledStatus}
          {...benefit}
        />
      ))}
    </section>
  )
}

export default BenefitsGrid
