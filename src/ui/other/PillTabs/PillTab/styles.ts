import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  pillTab: {
    minHeight: 36,
    maxHeight: 36,
    borderRadius: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 1 100%',
    cursor: 'pointer',
    zIndex: 1,
  },
  tabTitle: ({ isActive }) => ({
    fontSize: 12,
    lineHeight: '14px',
    color: isActive ? '#FFFFFF' : '#828282',
    transition: 'all .12s ease-in',
    textAlign: 'center',
  }),
}))
