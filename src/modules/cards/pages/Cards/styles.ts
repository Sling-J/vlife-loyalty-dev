import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  header: {
    marginBottom: 8,
  },
  pillTabsWrapper: {
    padding: '0 16px',
    marginBottom: 24,
  },
  cards: {
    padding: '0 16px 16px',
  },
  card: {
    marginBottom: 1,

    '&:first-child': {
      borderRadius: '8px 8px 0 0',
    },
    '&:last-child': {
      borderRadius: '0 0 8px 8px',
    },
  },
})
