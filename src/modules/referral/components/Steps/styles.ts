import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  stepsWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleWrapper: {
    padding: '0 16px',
    marginBottom: 16,
  },
  title: {
    textAlign: 'center',
    color: '#33691E',
    fontSize: 20,
    lineHeight: 1.2,
    letterSpacing: -0.24,
    fontWeight: 600,
  },
  steps: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 16px',
    background: '#C5E1A5',
    borderRadius: 8,
    flex: '1 1 100%',
    maxWidth: 72,
    minHeight: 92,
    marginRight: 16,
    position: 'relative',
    '&:not(:first-child)': {
      '&:before': {
        content: '""',
        position: 'absolute',
        width: 16,
        height: 16,
        background: '#C5E1A5',
        top: 20,
        left: -8,
        transform: 'rotate(45deg)',
      },
    },
    '&:first-child': {
      marginLeft: 16,
    },
  },
  stepNumber: {
    fontWeight: 500,
    fontSize: 27,
    lineHeight: '32px',
    color: '#33691E',
  },
  stepInfo: {
    fontWeight: 500,
    fontSize: 10,
    lineHeight: 1.2,
    color: '#33691E',
  },
})
