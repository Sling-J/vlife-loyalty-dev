import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  shareButton: {
    padding: '0 32px',
    backgroundColor: '#7CB342',
    boxShadow:
      '0px 4px 16px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    outline: 'none !important',
    minHeight: 60,
    maxHeight: 60,
    borderRadius: 40,
  },
  shareIcon: {
    marginRight: 16,
  },
  shareText: {
    fontWeight: 500,
    fontSize: 17,
    lineHeight: '20px',
    color: '#FFFFFF',
    whiteSpace: 'nowrap',
  },
}))
