import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  benefitsGrid: {
    display: 'grid',
    flexWrap: 'wrap',
    padding: 16,
    gridTemplateColumns: 'auto auto auto',
  },
  gridItem: {
    marginBottom: 16,
    justifySelf: 'center',
  },
})
