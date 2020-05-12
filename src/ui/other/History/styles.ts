import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  titleWrapper: {
    padding: '16px 16px 0',
  },
  title: {
    fontSize: 20,
    lineHeight: 1.2,
    letterSpacing: -0.24,
    color: '#333333',
    fontWeight: 500,
  },
  historyWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  history: {
    display: 'flex',
    flexDirection: 'column',
  },
  date: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 8px',
    marginBottom: 32,
  },
  dateTitleWrapper: {
    padding: 8,
  },
  dateTitle: {
    color: '#BDBDBD',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 1.25,
    letterSpacing: '-0.0025em',
  },
  dateItemsWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  historyItem: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 34,
    maxHeight: 34,

    '&:first-child': {
      borderRadius: '8px 8px 0 0',
    },

    '&:last-child': {
      borderRadius: '0 0 8px 8px',
    },

    '&:not(:last-child)': {
      marginBottom: 1,
    },
  },
  historyItemTitleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  historyItemSubtitleWrapper: {
    display: 'flex',
  },
  historyItemTitle: {
    fontSize: 15,
    lineHeight: 1.25,
    letterSpacing: -0.24,
  },
  historyItemAmount: {
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 1.25,
    letterSpacing: -0.24,
  },
  historyItemSubtitle: {
    fontSize: 13,
    lineHeight: '16px',
    color: '#808080',
  },
  income: {
    color: '#0DB263',
  },
  charges: {
    color: '#EB5A5A',
  },
})
