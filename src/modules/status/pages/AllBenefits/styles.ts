import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  allBenefitsPage: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  headerWrapper: {
    display: 'flex',
    padding: '12px 0',
  },
  tabsWrapper: {
    padding: '8px 16px',
  },
}))
