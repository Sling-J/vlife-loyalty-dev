import React, { FC, useEffect, useState } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Condition } from '@vlife-grand-era/vlife-storybook/build'
import clsx from 'clsx'
import { GiftCardProps } from './types'
import { useStyles } from './styles'

const GiftCard: FC<GiftCardProps & WithTranslation> = ({
  imgSrc,
  title,
  description,
  isForMe,
  personFullName,
  wasOpen,
  className,
  t,
}) => {
  const [localWasOpen, setLocalWasOpen] = useState(false)
  const classes = useStyles({ wasOpen: localWasOpen })

  useEffect(() => {
    setLocalWasOpen(wasOpen)
  }, [wasOpen])

  return (
    <div className={clsx(classes.giftCard, className)}>
      <Condition match={isForMe}>
        <button
          onClick={() => setLocalWasOpen(true)}
          className={classes.openButton}
        />
      </Condition>
      <img className={classes.img} src={imgSrc} alt={title} />
      <p className={classes.title}>{title}</p>
      <p className={classes.description}>{description}</p>
      <hr className={classes.hr} />
      <p className={classes.personFullName}>
        <span className={classes.isForMe}>
          {t(isForMe ? 'from' : 'to') + ':'}
        </span>{' '}
        {personFullName}
      </p>
    </div>
  )
}

export default withTranslation()(GiftCard)
