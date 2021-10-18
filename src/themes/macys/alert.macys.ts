import { AlertProps } from '@mui/material'
import { PrimaryColors } from './colors.macys'
import { FontSizes } from './typography.macys'

interface IAlertVariant {
  props: AlertProps
  style: Record<string, any>
}

interface IAlertThemeOptions {
  defaultProps: AlertProps
  variants?: IAlertVariant[]
}

export default {
  defaultProps: {
    variant: 'filled'
  },
  styleOverrides: {
    root: {
      fontSize: `${FontSizes.body}px`,
      fontWeight: 400
    }
  },
  variants: [
    {
      props: { variant: 'filled' },
      style: {
        backgroundColor: PrimaryColors.gray7,
        color: PrimaryColors.black,
        '& .MuiAlert-icon': {
          display: 'none'
        }
      }
    },
    {
      props: { variant: 'outlined', severity: 'info' },
      style: {
        backgroundColor: PrimaryColors.transparent,
        color: PrimaryColors.black,
        border: `1px solid ${PrimaryColors.black}`,
        '& .MuiAlert-icon': {
          color: PrimaryColors.black
        }
      }
    },
    {
      props: { variant: 'outlined', severity: 'success' },
      style: {
        backgroundColor: PrimaryColors.transparent,
        color: PrimaryColors.black,
        border: `1px solid ${PrimaryColors.black}`,
        '& .MuiAlert-icon': {
          color: PrimaryColors.green
        }
      }
    },
    {
      props: { variant: 'outlined', severity: 'error' },
      style: {
        backgroundColor: PrimaryColors.transparent,
        color: PrimaryColors.red,
        border: `1px solid ${PrimaryColors.red}`
      }
    }
  ]
} as IAlertThemeOptions
