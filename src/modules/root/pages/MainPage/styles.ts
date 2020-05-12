import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  mainPage: {
    width: '100%',
    maxWidth: '100vw',
    overflow: 'hidden',
  },
  contentWrapper: {
    padding: 16,
  },
  shareLinks: {
    display: 'flex',
    marginBottom: 16,
  },
  linkWithMb: {
    marginBottom: 16,
  },
  inviteFriendLink: {
    marginRight: 16,
    flex: '1 1 100%',
  },
  shareButton: {
    flex: '1 1 100%',
  },
})
