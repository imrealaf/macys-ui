import { ThemeOptions } from '@mui/material'
import spacing from '../theme/spacing'
import { ShadowColor } from '../theme/shadows'
import typography from './typography.macys'
import {
  Colors,
  BackgroundColors,
  ButtonColors,
  ButtonTextColors,
  TextColors,
  ContrastTextColors
} from './colors.macys'

const themeConfig: ThemeOptions = {
  shape: {
    borderRadius: 0
  },
  palette: {
    background: {
      paper: BackgroundColors.content,
      default: BackgroundColors.chrome
    },
    text: {
      primary: TextColors.default,
      disabled: TextColors.disabled
    },
    info: {
      main: Colors.info
    },
    error: {
      main: Colors.error
    },
    warning: {
      main: Colors.important
    },
    success: {
      main: Colors.success
    }
  },
  spacing,
  typography,
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: `0 0 15px ${ShadowColor}`
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: BackgroundColors.component
        }
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: ButtonColors.active,
            color: ButtonTextColors.active,
            ':hover': {
              backgroundColor: ButtonColors.hover
            },
            ':focus': {
              backgroundColor: ButtonColors.focus
            },
            ':disabled': {
              backgroundColor: ButtonColors.disabled,
              color: ButtonTextColors.disabled
            }
          }
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            backgroundColor: 'transparent',
            border: `1px solid ${ButtonColors.active}`,
            color: ButtonColors.active,
            ':hover': {
              borderColor: ContrastTextColors.low,
              backgroundColor: ContrastTextColors.low
            },
            ':focus': {
              borderColor: ContrastTextColors.low,
              backgroundColor: ContrastTextColors.low
            },
            ':disabled': {
              borderColor: ButtonColors.disabled,
              color: ButtonTextColors.disabled
            }
          }
        }
      ]
    }
  }
}

export default themeConfig
