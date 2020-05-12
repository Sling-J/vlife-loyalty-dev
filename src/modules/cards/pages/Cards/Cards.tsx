import React, { FC, useEffect, useState } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { PageWithMobileNav, PageHeader } from 'ui'
import { textHas } from 'lib/utils'
import { CardItem } from '../../components'
import { CardsProps } from './types'
import { useStyles } from './styles'

const Cards: FC<CardsProps & WithTranslation> = ({ t, cards }) => {
  const classes = useStyles()
  const [localCards, setLocalCards] = useState([])

  useEffect(() => {
    setLocalCards(cards)
  }, [cards])

  const onSearch = (text: string) => {
    const searchedCards = cards.filter(
      (card) => textHas(card?.title, text) || textHas(card?.subtitle, text),
    )
    setLocalCards(searchedCards)
  }

  /* TODO uncomment when backend will be ready */
  // const onActiveTabChange = (value: string) => {
  //   if (value === 'frequent') {
  //     const frequentCards = cards.filter(card => card)
  //     setLocalCards(frequentCards)
  //   } else {
  //     setLocalCards(cards)
  //   }
  // }

  return (
    <PageWithMobileNav>
      <PageHeader
        className={classes.header}
        title={t('cards:myCards')}
        onSearchTextChange={onSearch}
        withPhoto
      />
      {/* TODO uncomment when backend will be ready */}
      {/*<div className={classes.pillTabsWrapper}>*/}
      {/*  <PillTabs tabs={cardTabs} onActiveTabChange={onActiveTabChange} />*/}
      {/*</div>*/}
      <div className={classes.cards}>
        {localCards.map((card, index) => (
          <CardItem className={classes.card} key={`card-${index}`} {...card} />
        ))}
      </div>
    </PageWithMobileNav>
  )
}

Cards.defaultProps = {
  cards: [
    {
      img:
        'https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/b6/fa/a9/b6faa9c5-1d37-98d9-171d-8e1010aaa83f/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png',
      title: 'Smart Plaza',
      subtitle: 'Накопительная карта',
      bonusesAmount: 7000,
    },
    {
      img:
        'https://vestikavkaza.ru/upload/2020-04-07/15862290735e8bef51e18813.31685486.png',
      title: 'Спортмастер',
      subtitle: 'Накопительная карта',
      bonusesAmount: 800,
    },
    {
      img: 'https://cargotrade.lv/wp-content/uploads/2019/05/hnm.jpg',
      title: 'H&M',
      subtitle: 'Накопительная карта',
      bonusesAmount: 321,
    },
    {
      img:
        'https://www.kingsavenuemall.com/wp-content/uploads/2017/03/costa.png',
      title: 'Costa Coffee',
      subtitle: 'Скидочная карта',
      bonusesAmount: 542,
    },
    {
      img:
        'https://i2.wp.com/itc.ua/wp-content/uploads/2019/03/Glovo.png?fit=1000%2C667&quality=100&strip=all&ssl=1',
      title: 'Glovo',
      subtitle: 'Скидочная карта',
      bonusesAmount: 543,
    },
    {
      img: 'https://merey.kz/sites/default/files/shop/image/magnum1_1.jpg',
      title: 'Magnum',
      subtitle: 'Клубная карта',
      bonusesAmount: 213,
    },
    {
      img:
        'https://upload.wikimedia.org/wikipedia/ru/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
      title: 'Starbucks',
      subtitle: 'Скидочная карта',
      bonusesAmount: 15,
    },
    {
      img:
        'https://upload.wikimedia.org/wikipedia/ru/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
      title: 'Starbucks',
      subtitle: 'Скидочная карта',
      bonusesAmount: 15,
    },
    {
      img:
        'https://upload.wikimedia.org/wikipedia/ru/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
      title: 'Starbucks',
      subtitle: 'Скидочная карта',
      bonusesAmount: 15,
    },
  ],
}

export default withTranslation()(Cards)
