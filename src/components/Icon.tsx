import React from 'react'
import { useTheme } from '@mui/material'
import { ThemeColor } from '../theme'

export type IconSize = 'small' | 'medium' | 'large'

export enum IconSizes {
  small = 11,
  medium = 22,
  large = 32
}

export interface IIconProps {
  path?: string
  size?: IconSize
  color?: ThemeColor
}

function Icon({ path, size = 'medium', color = 'black' }: IIconProps) {
  const theme = useTheme()
  return (
    <svg
      viewBox={`0 0 ${IconSizes[size]} ${IconSizes[size]}`}
      style={{
        fill: color === 'inherit' ? 'inherit' : theme.palette[color].main,
        width: `${IconSizes[size]}px`,
        height: `${IconSizes[size]}px`
      }}
    >
      <path d={path} />
    </svg>
  )
}

export default Icon
