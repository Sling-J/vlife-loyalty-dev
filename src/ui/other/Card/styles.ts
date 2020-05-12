import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  cardLinkWrapper: ({ bgImgSrc, bgColor, wrapperMaxWidth }) => ({
    display: 'flex',
    color: '#000000',
    minHeight: 92,
    maxHeight: 92,
    maxWidth: wrapperMaxWidth,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    backgroundImage: bgImgSrc && `url(${bgImgSrc})`,
    background: bgColor ? bgColor : '',
    backgroundRepeat: bgImgSrc && 'no-repeat',
    backgroundSize: bgImgSrc && 'cover',
    borderRadius: 16,
    padding: '24px 16px 0',
    boxShadow:
      '0px 0px 16px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.05)',
  }),
  titleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: ({ textColor, titleStyles }) => ({
    color: textColor ? textColor : '#000000',
    textAlign: 'left',
    ...titleStyles,
  }),
  subtitleWrapper: ({ hasSubtitle }) => ({
    opacity: hasSubtitle ? 1 : 0,
    transition: 'all .5s ease-out',
  }),
  subtitle: ({ textColor, subtitleStyles }) => ({
    color: textColor ? textColor : '#000000',
    textAlign: 'left',
    ...subtitleStyles,
  }),
  infoWrapper: ({ hasInfo }) => ({
    opacity: hasInfo ? 1 : 0,
    transition: 'all .5s ease-out',
    marginTop: 10
  }),
  info: ({ textColor, infoStyles }) => ({
    color: textColor ? textColor : '#000000',
    textAlign: 'left',
    fontSize: 11,
    ...infoStyles,
  }),
}))
