import React, { FC } from 'react'
import { Icon, IconProps } from '@vlife-grand-era/vlife-storybook'

const Cards: FC<IconProps> = ({
  originalWidth,
  originalHeight,
  color,
  ...props
}) => (
  <Icon
    originalHeight={originalHeight}
    originalWidth={originalWidth}
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22.2923 8.3L17.3323 20.27C17.0223 21.02 16.2923 21.48 15.5223 21.5C15.2623 21.5 14.9923 21.46 14.7323 21.35L7.36231 18.3C6.61231 17.99 6.15231 17.27 6.13231 16.5C6.12231 16.23 6.17231 15.96 6.28231 15.7L11.2423 3.73C11.5523 2.97 12.2923 2.51 13.0723 2.5C13.3323 2.5 13.5923 2.55 13.8423 2.65L21.2023 5.7C22.2223 6.12 22.7123 7.29 22.2923 8.3ZM2.7923 4.6L4.1323 4.04L4.13231 13.07L1.7023 7.21C1.2923 6.19 1.7823 5.02 2.7923 4.6ZM8.1423 2.5C7.0423 2.5 6.1423 3.4 6.1423 4.5L6.14231 10.84L9.5923 2.5L8.1423 2.5Z'
      fill={color}
    />
  </Icon>
)

Cards.defaultProps = {
  originalWidth: 24,
  originalHeight: 24,
  width: 24,
  height: 24,
  color: '#9E9E9E',
}

export default Cards
