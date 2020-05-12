export interface PageHeaderProps {
  title?: string
  className?: string
  backButtonClassName?: string
  hasBackButton?: boolean
  onQuestionButtonClick?: () => void
  onSearchTextChange?: (searchText: string) => void
  withPhoto?: boolean
}
