import { ThemeOptions } from '@mui/material'

import spacing from '../theme/spacing'
import typography from './macys/typography.macys'
import { PrimaryColors } from './macys/colors.macys'
import MuiOutlinedInput from './macys/input.macys'
import MuiButton from './macys/button.macys'
import MuiAlert from './macys/alert.macys'
import MuiDialog from './macys/dialog.macys'
import { MuiAccordion, MuiAccordionSummary } from './macys/accordion.macys'

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
    divider: PrimaryColors.gray3
  },

  spacing,
  typography,
  components: {
    MuiOutlinedInput,
    MuiButton,
    MuiAlert,
    MuiDialog,
    MuiAccordion,
    MuiAccordionSummary
  }
}

export default themeConfig
