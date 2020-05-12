import i18n from 'i18next'
import { BenefitStatus } from './types'

export const benefitsStatuses = [
  {
    title: i18n.t('status:active'),
    value: BenefitStatus.ACTIVE,
  },
  {
    title: i18n.t('status:used'),
    value: BenefitStatus.USED,
  },
  {
    title: i18n.t('status:expired'),
    value: BenefitStatus.EXPIRED,
  },
]
