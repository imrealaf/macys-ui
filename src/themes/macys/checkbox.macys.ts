import { CheckboxProps } from '@mui/material'
import { PrimaryColors } from './colors.macys'

interface ICheckboxThemeOptions {
  defaultProps: CheckboxProps
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
} as ICheckboxThemeOptions
