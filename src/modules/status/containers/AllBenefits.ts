import { connect } from 'react-redux'
import { AllBenefits } from '../pages'
import { RootState } from 'store/rootReducer'
import { bindActionCreators, Dispatch } from 'redux'
import * as statusActions from '../actions'

const mapStateToProps = (state: RootState) => ({
  common: state.common,
  status: state.status,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators(statusActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllBenefits)
