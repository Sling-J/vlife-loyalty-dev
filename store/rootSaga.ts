import { all } from 'redux-saga/effects'
import { rootWatcherSaga } from 'root'
import { statusWatcherSaga } from 'status'

export default function* rootSaga() {
  yield all([rootWatcherSaga(), statusWatcherSaga()])
}
