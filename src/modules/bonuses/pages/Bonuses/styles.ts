import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  bonusesPage: {
    width: '100%',
    maxWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    marginBottom: 16,
  },
  titleWrapper: {
    padding: '24px 24px 8px',
  },
  title: {
    fontWeight: 500,
    fontSize: 33,
    lineHeight: '39px',
    letterSpacing: -0.24,
  },
  availableAmountWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 24px',
    marginBottom: 32,
  },
  amount: {
    fontSize: 20,
    lineHeight: 1.2,
    letterSpacing: -0.24,
    color: '#333333',
  },
  bold: {
    fontWeight: 500,
  },
  buttonWrapper: {
    padding: '0 16px',
  },
  button: {
    width: '100%',
    border: 'none',
    outline: 'none !important',
    display: 'flex',
    minHeight: 56,
    maxHeight: 56,
    background: '#E9ECFF',
    padding: '0 16px',
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 500,
    fontSize: 17,
    lineHeight: '20px',
    color: '#4D77FB',
  },
  history: ({ hasHistory }) => ({
    opacity: hasHistory ? 1 : 0,
    transition: 'all .5s ease',
  }),
  tabs: {
    padding: '16px 16px 0',
  },
}))
