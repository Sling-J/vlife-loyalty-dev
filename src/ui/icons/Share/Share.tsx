import React, { FC } from 'react'
import { Icon, IconProps } from '@vlife-grand-era/vlife-storybook'

const Share: FC<IconProps> = ({
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
      d='M12 0.585938L11.2929 1.29304L7.29289 5.29304C6.90237 5.68357 6.90237 6.31673 7.29289 6.70726C7.68342 7.09778 8.31658 7.09778 8.70711 6.70726L11 4.41436V16.0002C11 16.5524 11.4477 17.0002 12 17.0002C12.5523 17.0002 13 16.5524 13 16.0002V4.41436L15.2929 6.70726C15.6834 7.09778 16.3166 7.09778 16.7071 6.70726C17.0976 6.31673 17.0976 5.68357 16.7071 5.29304L12.7071 1.29304L12 0.585938ZM20 9.00015C20 8.44787 19.5523 8.00015 19 8.00015H16C15.4477 8.00015 15 8.44787 15 9.00015C15 9.55244 15.4477 10.0002 16 10.0002H18V21.0002H6V10.0002H8C8.55229 10.0002 9 9.55244 9 9.00015C9 8.44787 8.55229 8.00015 8 8.00015H5C4.44771 8.00015 4 8.44787 4 9.00015V22.0002C4 22.5524 4.44771 23.0002 5 23.0002H19C19.5523 23.0002 20 22.5524 20 22.0002V9.00015Z'
      fill='white'
    />
  </Icon>
)

Share.defaultProps = {
  originalWidth: 24,
  originalHeight: 24,
  width: 24,
  height: 24,
  color: '#E0E0E0',
}

export default Share
