import { createReducer } from 'lib/utils'
import { Reducer } from 'redux'
import { SET_CLP_INFO } from '../constants'
import { CommonState } from './interfaces'

const initialState: CommonState = {
  clpInfo: {
    status: '',
    bonusesAmount: 0,
    color: '',
    imgSrc: '',
    referralLink: '',
  },
}

export const common: Reducer = createReducer(initialState, {
  [SET_CLP_INFO]: (state, action) => ({ ...state, clpInfo: action.payload }),
})
