import React, { FC, useEffect, useState } from 'react'
import clsx from 'clsx'
import { PillTab } from './PillTab'
import { PillTabsProps } from './types'
import { useStyles } from './styles'

const PillTabs: FC<PillTabsProps> = ({
  tabs,
  onActiveTabChange,
  className,
}) => {
  const [activeTabValue, setActiveTabValue] = useState(undefined)
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const classes = useStyles({ length: tabs.length, activeTabIndex })

  useEffect(() => {
    onActiveTabChange(activeTabValue)
  }, [activeTabValue])

  useEffect(() => {
    if (tabs.length) {
      setActiveTabValue(tabs[0]?.value)
    }
  }, [tabs.length])

  return (
    <div className={clsx(classes.pillTabs, className)}>
      {tabs.map((tab, index) => (
        <PillTab
          onTabClick={(value) => {
            setActiveTabValue(value)
            setActiveTabIndex(index)
          }}
          isActive={activeTabValue === tab.value}
          key={`Tab${index}`}
          {...tab}
        />
      ))}
      <div className={classes.activeTabBg} />
    </div>
  )
}

export default PillTabs
