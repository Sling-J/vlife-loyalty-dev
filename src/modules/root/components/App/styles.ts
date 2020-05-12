import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  wrapper: {
    height: '100vh',
    width: '100%',
    display: 'grid',
    gridTemplateAreas: `
      'main'
    `,
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr',
  },
})
