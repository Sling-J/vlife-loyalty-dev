export interface BenefitProps {
  imgSrc: string
  title: string
  link: string
  merchantLogoSrc: string
  status: string
  disabledStatus?: string
  className?: string
}

export interface BenefitsSwiperProps {
  benefits: BenefitProps[]
  className?: string
}

export interface BenefitsGridProps {
  benefits: BenefitProps[]
  disabledStatus?: string
}
