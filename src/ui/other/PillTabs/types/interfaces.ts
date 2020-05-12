export interface PillTabsProps {
  tabs: PillTabProps[]
  onActiveTabChange: (value: string | number | boolean) => void
  className?: string
}

export interface PillTabProps {
  title: string
  value: string | number | boolean
  isActive?: boolean
  onTabClick?: (value: string | number | boolean) => void
}
