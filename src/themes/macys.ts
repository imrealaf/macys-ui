import { ThemeOptions } from '@mui/material'

import spacing from '../theme/spacing'
import typography from './macys/typography.macys'
import { PrimaryColors } from './macys/colors.macys'
import MuiOutlinedInput from './macys/input.macys'
import MuiButton from './macys/button.macys'
import MuiAlert from './macys/alert.macys'
import MuiDialog from './macys/dialog.macys'
import { MuiAccordion, MuiAccordionSummary } from './macys/accordion.macys'
import MuiRadio from './macys/radio.macys'
import MuiCheckbox from './macys/checkbox.macys'

declare module '@mui/material/styles' {
  interface Palette {
    gray1: Palette['primary']
    gray2: Palette['primary']
    gray3: Palette['primary']
    gray4: Palette['primary']
    gray5: Palette['primary']
    gray6: Palette['primary']
    gray7: Palette['primary']
  }
  interface PaletteOptions {
    gray1: PaletteOptions['primary']
    gray2: PaletteOptions['primary']
    gray3: PaletteOptions['primary']
    gray4: PaletteOptions['primary']
    gray5: PaletteOptions['primary']
    gray6: PaletteOptions['primary']
    gray7: PaletteOptions['primary']
  }
}

const themeConfig: ThemeOptions = {
  shape: {
    borderRadius: 5
  },

  palette: {
    background: {
      paper: PrimaryColors.gray7,
      default: PrimaryColors.white
    },
    text: {
      primary: PrimaryColors.black,
      disabled: PrimaryColors.gray2
    },
    primary: {
      main: PrimaryColors.red
    },
    secondary: {
      main: PrimaryColors.darkRed
    },
    error: {
      main: PrimaryColors.red
    },
    success: {
      main: PrimaryColors.green
    },
    divider: PrimaryColors.gray3,

    // Grays
    gray1: {
      main: PrimaryColors.gray1
    },
    gray2: {
      main: PrimaryColors.gray2
    },
    gray3: {
      main: PrimaryColors.gray3
    },
    gray4: {
      main: PrimaryColors.gray4
    },
    gray5: {
      main: PrimaryColors.gray5
    },
    gray6: {
      main: PrimaryColors.gray6
    },
    gray7: {
      main: PrimaryColors.gray7
    }
  },

  spacing,
  typography,
  components: {
    MuiOutlinedInput,
    MuiButton,
    MuiAlert,
    MuiDialog,
    MuiAccordion,
    MuiAccordionSummary,
    MuiRadio,
    MuiCheckbox
  }
}

export default themeConfig
