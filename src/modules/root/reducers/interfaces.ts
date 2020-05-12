export interface IClpInfo {
  status: string
  bonusesAmount: number
  color: string
  imgSrc: string
  referralLink: string
}

export interface CommonState {
  clpInfo: IClpInfo
}
