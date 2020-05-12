import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  referralPage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#DCEDC8',
    paddingBottom: 96,
  },
  header: {
    marginBottom: 16,
  },
  refSteps: {
    margin: '24px 0',
  },
  shareButtonWrapper: {
    position: 'fixed',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: 40,
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
  },
  backButton: {
    background: 'rgba(51, 51, 51, 0.05)',
  },
})
