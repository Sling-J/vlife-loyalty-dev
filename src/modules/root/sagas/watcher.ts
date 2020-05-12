import { takeLatest } from 'redux-saga/effects'
import { REQUEST_CLP_INFO } from '../constants'
import { clpInfoWorker } from './workers'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* rootWatcherSaga() {
  yield takeLatest(REQUEST_CLP_INFO, clpInfoWorker)
}
