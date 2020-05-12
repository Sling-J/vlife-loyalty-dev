import { toast } from 'react-toastify'
import i18next from 'i18next'
import { copyToClipboard } from './copyToClipboard'

export const shareOrCopy = (title: string, text: string, url: string) => {
  // @ts-ignore
  if (navigator?.share) {
    // @ts-ignore
    navigator.share({
      title,
      text,
      url,
    })
  } else {
    copyToClipboard(url)
    toast.success(i18next.t('copied') + '!')
  }
}
