import { BenefitProps } from '../components'

export interface IClubProgress {
  remainingPercent: number
  nextStatus: string
}

export interface StatusState {
  description: string
  benefits: BenefitProps[]
  clubProgress: IClubProgress
}
