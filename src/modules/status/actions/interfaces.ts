import { StatusState } from '../reducers/interfaces'

export interface IStatusActions {
  setClubInfo: (payload: StatusState) => void
  requestClubInfo: (status: string) => void
}
