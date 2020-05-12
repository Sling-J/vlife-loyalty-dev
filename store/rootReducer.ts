import { combineReducers, Reducer } from 'redux'
import { status } from 'status'
import { common } from 'root'

export const rootReducer: Reducer = combineReducers({
  status,
  common,
})

export type RootState = ReturnType<typeof rootReducer>
