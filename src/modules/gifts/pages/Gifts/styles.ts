import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  giftsPage: {
    display: 'flex',
    flexDirection: 'column',
  },
  tabsWrapper: {
    flexShrink: 0,
    padding: '8px 16px',
  },
  giftsWrapper: {
    flexShrink: 0,
    padding: '16px 8px',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  gift: {
    flex: '1 0 100%',
    maxWidth: 160,
    marginBottom: 8,
  },
})
