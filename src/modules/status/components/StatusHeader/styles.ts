import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  statusHeaderWrapper: ({ bgColor, bgImgSrc }) => ({
    display: 'flex',
    minHeight: 160,
    maxHeight: 160,
    backgroundImage: bgImgSrc ? `url(${bgImgSrc})` : 'none',
    backgroundColor: bgColor ? bgColor : 'none',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: 'column',
    padding: '16px 16px 24px',
    zIndex: 1,
  }),
  buttonsWrapper: {
    display: 'flex',
    flex: '1 1 100%',
    maxHeight: 40,
    justifyContent: 'space-between',
  },
  statusWrapper: {
    flex: '1 1 100%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  title: {
    fontSize: 17,
    lineHeight: '20px',
  },
  subtitle: {
    fontSize: 33,
    lineHeight: '39px',
    letterSpacing: -0.24,
  },
}))
