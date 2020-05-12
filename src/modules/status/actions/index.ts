import { SET_CLUB_INFO, REQUEST_CLUB_INFO } from '../constants'
import { StatusState } from '../reducers/interfaces'
import { ActionCreator } from 'redux'

export const setClubInfo: ActionCreator<any> = (payload: StatusState) => ({
  type: SET_CLUB_INFO,
  payload,
})

export const requestClubInfo: ActionCreator<any> = (status: string) => ({
  type: REQUEST_CLUB_INFO,
  status,
})
