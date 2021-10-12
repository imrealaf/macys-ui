import { ThemeOptions } from '@mui/material'
import spacing from '../theme/spacing'
import { ShadowColor } from '../theme/shadows'
import {
  Colors,
  BackgroundColors,
  ButtonColors,
  ButtonTextColors,
  InlineButtonColors,
  InlineButtonTextColors,
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
  typography: {
    fontFamily: ['"Helvetica Neue"', 'Arial', 'Helvetica', 'sans-serif'].join(
      ','
    )
  },
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
        disableElevation: false
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
          props: { variant: 'outlined', color: 'primary' },
          style: {
            borderColor: ButtonColors.active,
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
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            backgroundColor: InlineButtonColors.active,
            color: InlineButtonTextColors.active,
            ':hover': {
              backgroundColor: InlineButtonColors.hover
            },
            ':focus': {
              backgroundColor: InlineButtonColors.focus
            },
            ':disabled': {
              backgroundColor: InlineButtonColors.disabled,
              color: InlineButtonTextColors.disabled
            }
          }
        }
      ]
    }
  }
}

export default themeConfig
