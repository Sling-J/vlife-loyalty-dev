import React, { FC, useEffect, useState } from 'react'
import { RootState } from 'store/rootReducer'
import { IStatusActions } from 'status'
import { PageWithMobileNav } from 'ui'
import {
  StatusHeader,
  StatusInfo,
  BenefitsSwiper,
  StatusProgress,
} from '../../components'
import { StatusProps } from './types'
import { useStyles } from './styles'

const Status: FC<StatusProps & RootState & IStatusActions> = ({
  common,
  status,
}) => {
  const [clubDescription, setClubDescription] = useState('')
  const [benefits, setBenefits] = useState([])
  const classes: any = useStyles({ hasBenefits: Boolean(benefits.length) })

  useEffect(() => {
    setBenefits(status?.benefits?.slice(0, 5))
  }, [status?.benefits?.length])

  useEffect(() => {
    setClubDescription(status?.description)
  }, [status?.description])

  return (
    <PageWithMobileNav>
      <main className={classes.statusPage}>
        <StatusHeader
          status={common?.clpInfo?.status}
          bgImgSrc={'images/gold.jpg'}
        />
        <StatusInfo info={clubDescription} />
        <StatusProgress
          nextStatus={status?.clubProgress?.nextStatus}
          remainingPercent={status?.clubProgress?.remainingPercent}
        />
        <BenefitsSwiper className={classes.benefits} benefits={benefits} />
      </main>
    </PageWithMobileNav>
  )
}

export default Status
