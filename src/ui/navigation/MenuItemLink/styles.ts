import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  menuItemLink: ({ bgColor }) => ({
    display: 'flex',
    textDecoration: 'none',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 48,
    maxHeight: 48,
    background: bgColor ? bgColor : 'transparent',
    borderRadius: 8,
    padding: '0 16px',
  }),
  title: {
    fontSize: 17,
    lineHeight: '20px',
    color: '#333333',
  },
}))
