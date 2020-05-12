import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  cardButton: {
    padding: 0,
    border: 'none',
    background: 'transparent',
    display: 'block',

    '&:focus': {
      outline: 'none',
    },
  },
})
