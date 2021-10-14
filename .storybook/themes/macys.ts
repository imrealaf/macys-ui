import * as macys from '../../src/themes/colors.macys'

export default {
  base: 'light',

  colorPrimary: macys.Colors.primary,
  colorSecondary: macys.Colors.secondary,

  // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Helvetica Neue", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: macys.Colors.primary,
  // barBg: macys.Colors.primary,

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Macys_logo.svg/1200px-Macys_logo.svg.png'
}
