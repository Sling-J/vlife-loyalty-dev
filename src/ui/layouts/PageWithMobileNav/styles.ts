import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  pageWithMobileNav: ({ withPromotions }) => ({
    height: '100%',
    width: '100%',
    paddingBottom: withPromotions ? 114 : 58,
  }),
})
