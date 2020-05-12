import i18n from 'i18next'
import { toNormalCase } from 'lib/utils'

export const getClubNameByStatus = (status: string) => {
  return `${toNormalCase(status)} ${i18n.t('common:club')}`
}
