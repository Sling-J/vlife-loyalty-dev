import { CardType } from './enums'

export interface CardProps {
  title: string
  subtitle?: string
  info?: string
  className?: string
  bgImgSrc?: string
  bgColor?: string
  textColor?: string
  type?: CardType
}
