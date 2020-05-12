import { createUseStyles } from 'react-jss'
import { ThemeInterface } from '@vlife-grand-era/vlife-storybook/build'

export const useStyles = createUseStyles((theme: ThemeInterface) => ({
  header: ({ searchIsOpen, hasBackButton }) => ({
    display: 'flex',
    minHeight: 40,
    alignItems: 'center',
    paddingLeft: searchIsOpen ? 0 : 16,
    paddingRight: searchIsOpen ? 0 : 16,
    paddingTop: hasBackButton ? 16 : 40,
    paddingBottom: hasBackButton ? 16 : 8,
    transition: searchIsOpen ? 'all .15s ease-in' : 'all .15s ease-out',
    background: searchIsOpen ? theme.primaryColor : 'transparent',
  }),
  left: ({ searchIsOpen }) => ({
    flex: '2 1 100%',
    display: searchIsOpen ? 'none' : 'flex',
    alignItems: 'center',
  }),
  right: {
    flex: '1 2 100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: ({ hasBackButton }) => ({
    fontSize: hasBackButton ? 20 : 33,
    lineHeight: hasBackButton ? '24px' : '39px',
    letterSpacing: -0.24,
    color: '#333333',
    whiteSpace: 'nowrap',
  }),
  photo: ({ searchIsOpen }) => ({
    display: searchIsOpen && 'none',
    minWidth: 40,
    maxWidth: 40,
    minHeight: 40,
    maxHeight: 40,
    border: '2px solid #FFFFFF',
    borderRadius: '50%',
    boxSizing: 'border-box',
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.2)',
    marginLeft: 16,
    objectFit: 'cover',
  }),
}))
