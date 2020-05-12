import { CardType } from 'ui'

export const getWrapperMaxWidth = (type: CardType) => {
  switch (type) {
    case CardType.SMALL:
      return '100%'
    case CardType.MEDIUM:
      return '100%'
  }
}

export const getTitleStyles = (type: CardType) => {
  switch (type) {
    case CardType.SMALL:
      return {
        fontSize: 15,
        lineHeight: '18px',
        letterSpacing: -0.24,
        marginBottom: 4,
      }
    case CardType.MEDIUM:
      return {
        fontSize: 17,
        lineHeight: '20px',
      }
  }
}

export const getSubtitleStyles = (type: CardType) => {
  switch (type) {
    case CardType.SMALL:
      return {
        fontSize: 10,
        lineHeight: '12px',
      }
    case CardType.MEDIUM:
      return {
        fontSize: 27,
        lineHeight: '32px',
        letterSpacing: -0.24,
      }
  }
}
