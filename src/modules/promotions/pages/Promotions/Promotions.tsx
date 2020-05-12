import React, { FC, useState } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import Modal from 'react-modal'
import {
  DynamicPromotions,
  DynamicPromotionType,
  PillButton,
} from '@vlife-grand-era/vlife-storybook/build'
import { PageWithMobileNav, PageHeader } from 'ui'
import { PromotionsProps } from './types'
import { useStyles } from './styles'

const promotions = [
  {
    type: DynamicPromotionType.BIG_PRINT,
    items: [
      {
        link:
          'https://p1.zoon.ru/preview/BN49ZlsZpzkBS6gifE8gYA/640x402x85/1/d/8/original_5d6cd130a2801130d0532a50_5d6cd19d6b3ee.jpg',
        imgSrc:
          'https://p1.zoon.ru/preview/BN49ZlsZpzkBS6gifE8gYA/640x402x85/1/d/8/original_5d6cd130a2801130d0532a50_5d6cd19d6b3ee.jpg',
      },
      {
        link:
          'https://i.insider.com/5da0946fcc4a0a2b411dae59?width=1100&format=jpeg&auto=webp',
        imgSrc:
          'https://i.insider.com/5da0946fcc4a0a2b411dae59?width=1100&format=jpeg&auto=webp',
      },
      {
        link: 'https://www.rocksound.tv/assets/uploads/top_logo.jpg',
        imgSrc: 'https://www.rocksound.tv/assets/uploads/top_logo.jpg',
      },
    ],
  },
  {
    type: DynamicPromotionType.SINGLE_CARD,
    title: 'Новинки',
    linkToAll: 'https://market-dev.vlife.kz/',
    items: [
      {
        link:
          'https://www.coffeecoffee.co.uk/wp-content/uploads/2019/09/lavazza-creme-e-aroma-coffee-beans-coffee-coffee-300x300.png',
        imgSrc:
          'https://www.coffeecoffee.co.uk/wp-content/uploads/2019/09/lavazza-creme-e-aroma-coffee-beans-coffee-coffee-300x300.png',
        title: 'Crema E Aroma',
        subtitle: 'Lavazza',
      },
      {
        link:
          'https://images.squarespace-cdn.com/content/v1/522cee59e4b090a2d481c4cf/1528720111876-2W9DCZFQTD0FS8PFHEMO/ke17ZwdGBToddI8pDm48kFcjIIX1FKcdO91v_2sr_2x7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USW_WVzW7aVXo2Ry4s1rbuMMhsaMdDaYTr6tab37c5BbKULy2O2411SvyKR8oCtcyw/belt_m_1.jpg',
        imgSrc:
          'https://images.squarespace-cdn.com/content/v1/522cee59e4b090a2d481c4cf/1528720111876-2W9DCZFQTD0FS8PFHEMO/ke17ZwdGBToddI8pDm48kFcjIIX1FKcdO91v_2sr_2x7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USW_WVzW7aVXo2Ry4s1rbuMMhsaMdDaYTr6tab37c5BbKULy2O2411SvyKR8oCtcyw/belt_m_1.jpg',
        title: 'Футболка',
        subtitle: 'Ashwear',
      },
      {
        link: 'https://biosfera.kz/image/cache/products/M-019812-320x320.jpg',
        imgSrc: 'https://biosfera.kz/image/cache/products/M-019812-320x320.jpg',
        title: 'Фито чаи',
        subtitle: 'Биосфера',
      },
      {
        link: 'https://a.lmcdn.ru/img600x866/A/D/AD093AWEDYG9_7987906_2_v1.jpg',
        imgSrc:
          'https://a.lmcdn.ru/img600x866/A/D/AD093AWEDYG9_7987906_2_v1.jpg',
        title: 'adidas',
        subtitle: 'Кеды VS PACE',
      },
    ],
  },
  {
    type: DynamicPromotionType.SMALL_PRINT,
    items: [
      {
        imgSrc:
          'https://content.thefroot.com/media/market_products/4515f/5e7344515f0e8.jpg',
        link:
          'https://content.thefroot.com/media/market_products/4515f/5e7344515f0e8.jpg',
      },
      {
        imgSrc: 'https://promocod.kz/wp-content/uploads/2018/12/cocacola.jpg',
        link: 'https://promocod.kz/wp-content/uploads/2018/12/cocacola.jpg',
      },
      {
        imgSrc:
          'https://arbuz.kz/public/uploads/4f0330e3-03a6-4d82-af63-6f004c8388b7-tizer_yay_jpg.jpg',
        link:
          'https://arbuz.kz/public/uploads/4f0330e3-03a6-4d82-af63-6f004c8388b7-tizer_yay_jpg.jpg',
      },
    ],
  },
  {
    type: DynamicPromotionType.SINGLE_CARD,
    title: 'Популярные акции',
    linkToAll: 'https://market-dev.vlife.kz/',
    items: [
      {
        link:
          'https://tayfi.kz/wa-data/public/shop/products/24/34/3424/images/3770/3770.970.jpg',
        imgSrc:
          'https://tayfi.kz/wa-data/public/shop/products/24/34/3424/images/3770/3770.970.jpg',
        title: 'Самокат Xiaomi',
        subtitle: 'mi.kz',
      },
      {
        link:
          'https://cf-product.clouty.ru/link_aHR0cHM6Ly9pbWFnZXMuYXNvcy1tZWRpYS5jb20vcHJvZHVjdHMva3VydGthLXYtc3RpbGUtcGVjaHZvcmstcG9sby1yYWxwaC1sYXVyZW4vMTM1Mjg2MjQtMS0wMDF3aGl0ZT8kWFhMJA==',
        imgSrc:
          'https://cf-product.clouty.ru/link_aHR0cHM6Ly9pbWFnZXMuYXNvcy1tZWRpYS5jb20vcHJvZHVjdHMva3VydGthLXYtc3RpbGUtcGVjaHZvcmstcG9sby1yYWxwaC1sYXVyZW4vMTM1Mjg2MjQtMS0wMDF3aGl0ZT8kWFhMJA==',
        title: 'Polo Ralph Lauren',
        subtitle: 'Куртка',
      },
      {
        link:
          'https://tech.informator.ua/wp-content/uploads/2020/04/iphone12.jpg',
        imgSrc:
          'https://tech.informator.ua/wp-content/uploads/2020/04/iphone12.jpg',
        title: 'Apple',
        subtitle: 'Iphone нового поколения',
      },
      {
        link:
          'https://i.pinimg.com/736x/5c/31/44/5c3144b1aaf1e2e8a583347a7cd13bfa.jpg',
        imgSrc:
          'https://i.pinimg.com/736x/5c/31/44/5c3144b1aaf1e2e8a583347a7cd13bfa.jpg',
        title: 'Polo Ralph Lauren',
        subtitle: 'Платье',
      },
    ],
  },
  {
    type: DynamicPromotionType.MULTIPLE_CARDS,
    title: 'Магазин',
    cards: [
      {
        title: 'Мода',
        linkToAll: 'https://market-dev.vlife.kz/',
        items: [
          {
            link:
              'https://cf-product.clouty.ru/link_aHR0cHM6Ly9pbWFnZXMuYXNvcy1tZWRpYS5jb20vcHJvZHVjdHMva3VydGthLXYtc3RpbGUtcGVjaHZvcmstcG9sby1yYWxwaC1sYXVyZW4vMTM1Mjg2MjQtMS0wMDF3aGl0ZT8kWFhMJA==',
            imgSrc:
              'https://cf-product.clouty.ru/link_aHR0cHM6Ly9pbWFnZXMuYXNvcy1tZWRpYS5jb20vcHJvZHVjdHMva3VydGthLXYtc3RpbGUtcGVjaHZvcmstcG9sby1yYWxwaC1sYXVyZW4vMTM1Mjg2MjQtMS0wMDF3aGl0ZT8kWFhMJA==',
            title: 'Polo Ralph Lauren',
            subtitle: 'Куртка',
          },
          {
            link:
              'https://cf-product.clouty.ru/link_aHR0cHM6Ly9pbWFnZXMuYXNvcy1tZWRpYS5jb20vcHJvZHVjdHMva3VydGthLXYtc3RpbGUtcGVjaHZvcmstcG9sby1yYWxwaC1sYXVyZW4vMTM1Mjg2MjQtMS0wMDF3aGl0ZT8kWFhMJA==',
            imgSrc:
              'https://cf-product.clouty.ru/link_aHR0cHM6Ly9pbWFnZXMuYXNvcy1tZWRpYS5jb20vcHJvZHVjdHMva3VydGthLXYtc3RpbGUtcGVjaHZvcmstcG9sby1yYWxwaC1sYXVyZW4vMTM1Mjg2MjQtMS0wMDF3aGl0ZT8kWFhMJA==',
            title: 'Polo Ralph Lauren',
            subtitle: 'Куртка',
          },
          {
            link:
              'https://cf-product.clouty.ru/link_aHR0cHM6Ly9pbWFnZXMuYXNvcy1tZWRpYS5jb20vcHJvZHVjdHMva3VydGthLXYtc3RpbGUtcGVjaHZvcmstcG9sby1yYWxwaC1sYXVyZW4vMTM1Mjg2MjQtMS0wMDF3aGl0ZT8kWFhMJA==',
            imgSrc:
              'https://cf-product.clouty.ru/link_aHR0cHM6Ly9pbWFnZXMuYXNvcy1tZWRpYS5jb20vcHJvZHVjdHMva3VydGthLXYtc3RpbGUtcGVjaHZvcmstcG9sby1yYWxwaC1sYXVyZW4vMTM1Mjg2MjQtMS0wMDF3aGl0ZT8kWFhMJA==',
            title: 'Polo Ralph Lauren',
            subtitle: 'Куртка',
          },
        ],
      },
      {
        title: 'Телефоны и гаджеты',
        linkToAll: 'https://market-dev.vlife.kz/',
        items: [
          {
            link:
              'https://tech.informator.ua/wp-content/uploads/2020/04/iphone12.jpg',
            imgSrc:
              'https://tech.informator.ua/wp-content/uploads/2020/04/iphone12.jpg',
            title: 'Apple',
            subtitle: 'Iphone нового поколения',
          },
          {
            link:
              'https://tech.informator.ua/wp-content/uploads/2020/04/iphone12.jpg',
            imgSrc:
              'https://tech.informator.ua/wp-content/uploads/2020/04/iphone12.jpg',
            title: 'Apple',
            subtitle: 'Iphone нового поколения',
          },
          {
            link:
              'https://tech.informator.ua/wp-content/uploads/2020/04/iphone12.jpg',
            imgSrc:
              'https://tech.informator.ua/wp-content/uploads/2020/04/iphone12.jpg',
            title: 'Apple',
            subtitle: 'Iphone нового поколения',
          },
        ],
      },
    ],
  },
]

const Promotions: FC<PromotionsProps & WithTranslation> = ({ t }) => {
  const classes = useStyles()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const onQuestionButtonClick = () => {
    setModalIsOpen(true)
  }
  const onOKButtonClick = () => {
    setModalIsOpen(false)
  }

  return (
    <PageWithMobileNav withPromotions={false}>
      <main className={classes.promotionsPage}>
        <PageHeader
          hasBackButton
          title={t('promotions:promotions')}
          onQuestionButtonClick={onQuestionButtonClick}
        />
        <DynamicPromotions promotions={promotions} />
      </main>
      <Modal isOpen={modalIsOpen} className={classes.modal}>
        <p className={classes.modalText}>{t('promotions:whatIsPromotion')}</p>
        <div className={classes.okButtonWrapper}>
          <PillButton
            className={classes.okButton}
            text={t('okUpper')}
            onButtonClick={onOKButtonClick}
          />
        </div>
      </Modal>
    </PageWithMobileNav>
  )
}

export default withTranslation()(Promotions)
