import React, { FC, useEffect, useState } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { RootState } from 'store/rootReducer'
import { textHas } from 'lib/utils'
import { PageHeader, PillTabs, PageWithMobileNav } from 'ui'
import { BenefitsGrid } from '../../components'
import { benefitsStatuses } from './benefitsStatuses'
import { AllBenefitsProps, BenefitStatus } from './types'
import { useStyles } from './styles'

const AllBenefits: FC<AllBenefitsProps & RootState & WithTranslation> = ({
  status,
  t,
}) => {
  const classes = useStyles()
  const [benefits, setBenefits] = useState([])
  const [activeTabValue, setActiveTabValue] = useState(
    benefitsStatuses[0].value,
  )

  const handleSearchBenefits = (text: string) => {
    const filteredBenefits = status?.benefits.filter(
      (item) => textHas(item?.title, text) && item?.status === activeTabValue,
    )

    setBenefits(filteredBenefits)
  }

  const onActiveTabChange = (value) => {
    setActiveTabValue(value)
    const filteredBenefits = status?.benefits.filter(
      (item) => item.status === value,
    )
    setBenefits(filteredBenefits)
  }

  useEffect(() => {
    setBenefits(status?.benefits)
    onActiveTabChange(activeTabValue)
  }, [status?.benefits])

  return (
    <PageWithMobileNav>
      <main className={classes.allBenefitsPage}>
        <PageHeader
          title={t('status:myBenefits')}
          onSearchTextChange={handleSearchBenefits}
          hasBackButton
        />
        <div className={classes.tabsWrapper}>
          <PillTabs
            onActiveTabChange={onActiveTabChange}
            tabs={benefitsStatuses}
          />
        </div>
        <BenefitsGrid
          benefits={benefits}
          disabledStatus={BenefitStatus.EXPIRED}
        />
      </main>
    </PageWithMobileNav>
  )
}

export default withTranslation()(AllBenefits)
