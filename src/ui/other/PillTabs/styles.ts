import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  pillTabs: {
    display: 'flex',
    minHeight: 36,
    maxHeight: 36,
    borderRadius: 18,
    background: '#F5F5F5',
    position: 'relative',
  },
  activeTabBg: ({ length, activeTabIndex }) => ({
    position: 'absolute',
    background: '#4D77FB',
    borderRadius: 18,
    minHeight: 36,
    maxHeight: 36,
    width: `calc(100%/${length})`,
    left: `${(activeTabIndex / length) * 100}%`,
    transition: 'all 80ms ease',
  }),
}))
