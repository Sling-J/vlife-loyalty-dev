import React, { FC } from 'react'
import { shareOrCopy } from 'lib/utils'
import { ShareIcon } from '../../icons'
import { ShareButtonProps } from './types'
import { useStyles } from './styles'

const ShareButton: FC<ShareButtonProps> = ({ text, link }) => {
  const classes: any = useStyles()

  const onButtonClick = () => {
    shareOrCopy('VLife', 'Join the VLife!', link)
  }

  return (
    <button className={classes.shareButton} onClick={onButtonClick}>
      <ShareIcon className={classes.shareIcon} />
      <p className={classes.shareText}>{text}</p>
    </button>
  )
}

export default ShareButton
