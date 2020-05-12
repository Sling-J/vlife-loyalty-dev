import { ActionCreator } from 'redux'
import { IClpInfo } from '../reducers/interfaces'
import { SET_CLP_INFO, REQUEST_CLP_INFO } from '../constants'

export const setClpInfo: ActionCreator<any> = (payload: IClpInfo) => ({
  type: SET_CLP_INFO,
  payload,
})

export const requestClpInfo: ActionCreator<any> = () => ({
  type: REQUEST_CLP_INFO,
})
