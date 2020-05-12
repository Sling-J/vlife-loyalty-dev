import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  referralProgress: {
    backgroundColor: '#F1F8E9',
    borderRadius: 16,
    padding: 32,
  },
  progressCounts: {
    padding: '8px 0',
    display: 'flex',
    minHeight: 76,
  },
  peopleAmount: {
    flex: '1 1 50%',
    marginRight: 10,
  },
  moneyAmount: {
    flex: '1 1 50%',
  },
  mainText: {
    fontWeight: 500,
    fontSize: 33,
    lineHeight: '39px',
    letterSpacing: -0.24,
    color: '#33691E',
  },
  mainSubText: {
    fontSize: 18,
    letterSpacing: -0.24,
    color: '#33691E',
  },
  dividerWrapper: {
    padding: '16px 0',
  },
  divider: {
    width: 80,
    height: 2,
    background: '#689F38',
    border: 'none',
    margin: 0,
  },
  infoWrapper: {
    padding: '8px 0',
  },
  info: {
    fontSize: 14,
    lineHeight: '16px',
    color: '#689F38',
  },
})
