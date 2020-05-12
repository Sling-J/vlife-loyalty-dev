import { connect } from 'react-redux'
import { Status } from '../pages'
import { RootState } from 'store/rootReducer'

const mapStateToProps = (state: RootState) => ({
  common: state.common,
  status: state.status,
})

export default connect(mapStateToProps)(Status)
