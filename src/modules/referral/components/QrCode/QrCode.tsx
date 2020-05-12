import React, { FC } from 'react'
import Qr from 'qrcode.react'
import { Condition } from '@vlife-grand-era/vlife-storybook/build'
import { QrCodeProps } from './types'
import { useStyles } from './styles'

const QrCode: FC<QrCodeProps> = ({ link }) => {
  const classes = useStyles()

  return (
    <div className={classes.qrCodeWrapper}>
      <Condition match={link}>
        <div className={classes.qrImgWrapper}>
          <Qr value={link} size={164} />
        </div>
      </Condition>
    </div>
  )
}

export default QrCode
