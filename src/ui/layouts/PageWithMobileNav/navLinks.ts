import i18next from 'i18next'
import { StarIcon } from '@vlife-grand-era/vlife-storybook/build'
import { CardsIcon } from 'ui'

export const navLinks = [
  {
    title: i18next.t('vLifeClub'),
    icon: StarIcon,
    link: '/main',
  },
  {
    title: i18next.t('cards:cards'),
    icon: CardsIcon,
    link: '/cards',
  },
]
