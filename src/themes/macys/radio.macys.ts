import { RadioProps } from '@mui/material'
import { PrimaryColors } from './colors.macys'

interface IRadioThemeOptions {
  defaultProps: RadioProps
}

export default {
  defaultProps: {
    color: 'default'
  },
  styleOverrides: {
    root: {
      color: PrimaryColors.black
    }
  }
} as IRadioThemeOptions
