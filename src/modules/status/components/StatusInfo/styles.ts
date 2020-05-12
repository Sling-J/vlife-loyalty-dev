import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  statusInfoWrapper: ({ hasInfo }) => ({
    display: 'flex',
    padding: 16,
    opacity: hasInfo ? 1 : 0,
    transition: 'all .5s ease',
  }),
  statusInfo: {
    fontSize: 15,
    lineHeight: '18px',
    letterSpacing: -0.24,
    color: '#333333',
  },
}))
