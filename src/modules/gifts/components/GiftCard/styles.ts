import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  giftCard: {
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  img: {
    flexShrink: 0,
    width: '100%',
    maxWidth: 160,
    minHeight: 212,
    maxHeight: 212,
    objectFit: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    fontWeight: 600,
    fontSize: 17,
    lineHeight: '20px',
    color: '#333333',
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    lineHeight: '14px',
    color: '#828282',
    marginBottom: 16,
  },
  hr: {
    width: '100%',
    border: 'none',
    height: 1,
    background: '#E0E0E0',
    marginTop: 0,
    marginBottom: 8,
  },
  personFullName: {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: '14px',
    color: '#757575',
  },
  isForMe: {
    fontSize: 10,
    lineHeight: 1.2,
  },
  openButton: ({ wasOpen }) => ({
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    background: 'url(images/newGift.png)',
    backgroundSize: 'cover',
    padding: 0,
    border: 'none',
    opacity: wasOpen ? 0 : 1,
    transition: 'all 150ms ease',
  }),
})
