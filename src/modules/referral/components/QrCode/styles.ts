import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  qrCodeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  qrImgWrapper: {
    backgroundColor: '#FFFFFF',
    padding: 32,
    borderRadius: 32,
    boxShadow:
      '0px 4px 16px rgba(124, 179, 66, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.05)',
  },
})
