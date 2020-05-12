interface HistoryDate {
  date: string
  items: HistoryItemProps[]
}

export interface HistoryProps {
  title: string
  dates: HistoryDate[]
  className?: string
}

export interface HistoryItemProps {
  title: string
  subTitle?: string
  amount: number
}
