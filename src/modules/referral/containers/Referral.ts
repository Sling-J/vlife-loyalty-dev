import { connect } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { Referral } from '../pages'

const mapStateToProps = (state: RootState) => ({
  common: state.common,
})

export default connect(mapStateToProps)(Referral)
