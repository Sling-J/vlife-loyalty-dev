import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  cardItem: {
    padding: 16,
    background: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    boxShadow:
      '2px 0px 4px rgba(0, 0, 0, 0.05), -2px 0px 4px rgba(0, 0, 0, 0.05)',
  },
  img: {
    flex: '1 1 100%',
    maxWidth: 32,
    minHeight: 32,
    maxHeight: 32,
    borderRadius: '50%',
    marginRight: 16,
    objectFit: 'cover',
  },
  info: {
    flex: '1 1 100%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: '#212121',
    fontSize: 17,
    lineHeight: '20px',
    fontWeight: 500,
  },
  subtitle: {
    color: '#9E9E9E',
    fontSize: 12,
    lineHeight: '14px',
  },
  bonusesAmount: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    maxWidth: 48,
    color: '#689F38',
    fontSize: 15,
    lineHeight: '18px',
    fontWeight: 500,
    textAlign: 'right',
    marginRight: 16,
  },
  arrowIcon: {
    flex: '1 1 100%',
    maxWidth: 24,
  },
})
