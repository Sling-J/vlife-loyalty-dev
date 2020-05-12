import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RootState } from 'store/rootReducer'
import { App } from '../components'
import * as commonActions from '../actions'
import * as StatusActionCreators from 'status/actions'

const mapStateToProps = (state: RootState) => ({
  common: state.common,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators(
    { ...commonActions, ...StatusActionCreators },
    dispatch,
  ),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
