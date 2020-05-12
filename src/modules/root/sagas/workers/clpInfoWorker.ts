import { call, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import i18n from 'i18next'
import { getClpInfoById } from '../../api'
import { setClpInfo } from '../../actions'

export function* clpInfoWorker() {
  try {
    // TODO привязать потом к реальному юзер айди или токену
    const response = yield call(getClpInfoById, 1)

    if (response.success) {
      yield put(setClpInfo(response.data))
    } else {
      const { message } = response.data

      yield toast.error(message)
    }
  } catch (error) {
    yield toast.error(i18n.t('errors:unknownError'))
  }
}
