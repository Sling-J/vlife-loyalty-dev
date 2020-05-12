import { takeLatest } from 'redux-saga/effects'
import { REQUEST_CLUB_INFO } from '../constants'
import { clubInfoWorker } from './workers'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* statusWatcherSaga() {
  yield takeLatest(REQUEST_CLUB_INFO, clubInfoWorker)
}
