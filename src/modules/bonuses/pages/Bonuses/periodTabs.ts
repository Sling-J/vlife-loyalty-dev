import i18next from 'i18next'

export const periodTabs = [
  {
    title: i18next.t('week'),
    value: 'one_week',
  },
  {
    title: i18next.t('month'),
    value: 'one_month',
  },
  {
    title: `3 ${i18next.t('monthShort')}`,
    value: 'three_months',
  },
  {
    title: `6 ${i18next.t('monthShort')}`,
    value: 'six_months',
  },
]
