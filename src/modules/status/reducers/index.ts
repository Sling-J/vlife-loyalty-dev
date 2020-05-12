import { createReducer } from 'lib/utils'
import { Reducer } from 'redux'
import { SET_CLUB_INFO } from '../constants'
import { StatusState } from './interfaces'

const initialState: StatusState = {
  description: '',
  benefits: [],
  clubProgress: {
    remainingPercent: 100,
    nextStatus: '',
  },
}

export const status: Reducer = createReducer(initialState, {
  [SET_CLUB_INFO]: (state, action) => ({ ...state, ...action.payload }),
})
