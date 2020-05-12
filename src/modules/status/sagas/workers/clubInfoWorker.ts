import { call, put } from 'redux-saga/effects'
import i18n from 'i18next'
import { toast } from 'react-toastify'
import { getClubInfoByStatus } from '../../api'
import { setClubInfo } from '../../actions'

export function* clubInfoWorker(action) {
  try {
    const response = yield call(getClubInfoByStatus, action.status)

    if (response.success) {
      yield put(setClubInfo(response?.data))
    } else {
      const { message } = response.data
      yield toast.error(message)
    }
  } catch (error) {
    yield toast.error(i18n.t('errors:unknownError'))
  }
}
