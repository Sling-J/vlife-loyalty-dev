import { connect } from 'react-redux'
import { MainPage } from '../pages'
import { RootState } from 'store/rootReducer'

const mapStateToProps = (state: RootState) => ({
  common: state.common,
})

export default connect(mapStateToProps)(MainPage)
