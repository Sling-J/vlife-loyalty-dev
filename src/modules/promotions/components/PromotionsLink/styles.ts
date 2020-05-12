import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  promotions: {
    position: 'fixed',
    bottom: 56,
    textDecoration: 'none',
    left: 0,
    width: '100%',
    willChange: 'transform',
    boxShadow:
      '0px 0px 16px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.05)',
    background: '#FFFFFF',
    borderRadius: '16px 16px 0 0',
    display: 'flex',
    flexDirection: 'column',
  },
  titleWrapper: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 1.2,
    letterSpacing: -0.24,
    color: '#333333',
  },
})
