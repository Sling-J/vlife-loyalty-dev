import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  benefitsWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleWrapper: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    lineHeight: 1,
    fontWeight: 500,
  },
  benefits: {
    display: 'flex',
    overflow: 'scroll',
    flexWrap: 'nowrap',
    flex: '1 1 100%',
    marginBottom: 8,
  },
  linkWrapper: {
    padding: '0 8px',
  },
  swipeItem: {
    marginRight: 8,
    '&:first-child': {
      paddingLeft: 8,
    },

    '&:last-child': {
      paddingRight: 8,
    },
  },
})
