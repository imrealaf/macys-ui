import { createTheme } from '@mui/material'
import {
  Colors,
  BackgroundColors,
  ButtonColors,
  ButtonTextColors,
  InlineButtonColors,
  InlineButtonTextColors,
  ShadowColor,
  TextColors,
  ContrastTextColors
} from './colors'
import { FontFamily } from './typography'

const theme = createTheme({
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
  typography: {
    fontFamily: FontFamily
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
})

export default theme
