import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  statusPage: {
    width: '100%',
    maxWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
  },
  benefits: ({ hasBenefits }) => ({
    marginBottom: 32,
    opacity: hasBenefits ? 1 : 0,
    transition: 'all .5s ease',
  }),
}))
