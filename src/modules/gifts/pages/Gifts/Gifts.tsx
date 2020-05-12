import React, { FC, useEffect, useState } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { PageWithMobileNav, PageHeader, PillTabs } from 'ui'
import { GiftCard } from '../../components/GiftCard'
import { giftsTabs } from './giftsTabs'
import { GiftsProps } from './types'
import { useStyles } from './styles'

const Gifts: FC<GiftsProps & WithTranslation> = ({ t, gifts }) => {
  const classes = useStyles()
  const [localGifts, setLocalGifts] = useState([])

  useEffect(() => {
    setLocalGifts(gifts)
  }, [gifts])

  const onActiveTabChange = (isForMe: boolean) => {
    setLocalGifts(gifts.filter((gift) => gift.isForMe === isForMe))
  }

  return (
    <PageWithMobileNav>
      <main className={classes.giftsPage}>
        <PageHeader title={t('gifts')} withPhoto />
        <div className={classes.tabsWrapper}>
          <PillTabs tabs={giftsTabs} onActiveTabChange={onActiveTabChange} />
        </div>
        <div className={classes.giftsWrapper}>
          {localGifts.map((gift, idx) => (
            <GiftCard className={classes.gift} key={`Gift-${idx}`} {...gift} />
          ))}
        </div>
      </main>
    </PageWithMobileNav>
  )
}

Gifts.defaultProps = {
  gifts: [
    {
      imgSrc: 'https://a.lmcdn.ru/img600x866/N/I/NI464EWDRV64_2139073_1_v3.jpg',
      title: 'Ветровка',
      description: 'Nike',
      isForMe: true,
      personFullName: 'Тимур Ахметович',
      wasOpen: false,
    },
    {
      imgSrc:
        'https://a.lmcdn.ru/img236x341/M/P/MP002XW0HOHU_10190158_1_v1.jpeg',
      title: 'Платье',
      description: 'Sana.moda',
      isForMe: true,
      personFullName: 'Ирина Кайратовна',
      wasOpen: true,
    },
    {
      imgSrc:
        'https://images.kz.prom.st/56234434_w440_h440_tualetnaya-bumaga-56.jpg',
      title: 'Туалетная бумага',
      description: 'INTERFOOD',
      isForMe: true,
      personFullName: 'Ирина Кайратовна',
      wasOpen: true,
    },
    {
      imgSrc:
        'https://avatars.mds.yandex.net/get-zen_doc/1362552/pub_5b0a5dcac3321bd7bb35b356_5b0a5eae7425f5d4eab3e0f1/scale_1200',
      title: 'Манго',
      description: 'INTERFOOD',
      isForMe: true,
      personFullName: 'Ирина Кайратовна',
      wasOpen: true,
    },
    {
      imgSrc:
        'https://business-poisk.com/wp-content/uploads/2013/07/karting-klub.jpg',
      title: 'Картинг',
      description: 'Кок-тобе',
      isForMe: false,
      personFullName: 'Тимур Ахметович',
    },
    {
      imgSrc: 'https://otyrar.kz/wp-content/uploads/2020/02/mrt.jpg',
      title: 'МРТ',
      description: 'Orhun Medical',
      isForMe: false,
      personFullName: 'Ирина Кайратовна',
    },
  ],
}

export default withTranslation('gifts')(Gifts)
