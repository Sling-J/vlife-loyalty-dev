import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  promotionsPage: {
    width: '100%',
    maxWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
  },
  modal: {
    padding: 24,
    boxShadow:
      '0px 0px 32px rgba(0, 0, 0, 0.1), 0px 0px 8px rgba(0, 0, 0, 0.05)',
    borderRadius: 16,
    background: '#FFFFFF',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(100% - 80px)',
    outline: 'none',
  },
  modalText: {
    flexShrink: 0,
    color: '#333333',
    fontSize: 17,
    lineHeight: '20px',
    letterSpacing: 0.5,
    marginBottom: 24,
  },
  okButtonWrapper: {
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'center',
  },
  okButton: {
    padding: '0 64px',
    minHeight: 44,
    maxHeight: 44,
    borderRadius: 40,
  },
})
