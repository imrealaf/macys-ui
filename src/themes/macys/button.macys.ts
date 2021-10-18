import { ButtonProps } from '@mui/material'
import { primayButtonColors, secondaryButtonColors } from './colors.macys'

interface IButtonVariant {
  props: ButtonProps
  style: Record<string, any>
}

interface IButtonThemeOptions {
  defaultProps: ButtonProps
  variants?: IButtonVariant[]
}

export default {
  defaultProps: {
    variant: 'contained',
    disableElevation: true
  },
  variants: [
    {
      props: { color: 'primary' },
      style: {
        backgroundColor: primayButtonColors.bg,
        color: primayButtonColors.text,
        ':hover': {
          backgroundColor: primayButtonColors.bgHover,
          color: primayButtonColors.textHover
        },
        ':disabled': {
          backgroundColor: primayButtonColors.bgDisabled,
          color: primayButtonColors.textDisabled
        }
      }
    },
    {
      props: { color: 'secondary' },
      style: {
        backgroundColor: secondaryButtonColors.bg,
        border: `1px solid ${secondaryButtonColors.border}`,
        color: secondaryButtonColors.text,
        ':hover': {
          borderColor: secondaryButtonColors.borderHover,
          backgroundColor: secondaryButtonColors.bgHover,
          color: secondaryButtonColors.textHover
        },
        ':disabled': {
          borderColor: secondaryButtonColors.borderDisabled,
          backgroundColor: secondaryButtonColors.bgDisabled,
          color: secondaryButtonColors.textDisabled
        }
      }
    }
  ]
} as IButtonThemeOptions
