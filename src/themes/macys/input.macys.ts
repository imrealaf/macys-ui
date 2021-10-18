import { PrimaryColors } from './colors.macys'

export default {
  defaultProps: {},
  styleOverrides: {
    root: {
      borderColor: PrimaryColors.gray2,
      '[disabled]': {
        backgroundColor: PrimaryColors.gray7,
        color: PrimaryColors.gray1
      }
    }
  }
}
