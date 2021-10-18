export enum PrimaryColors {
  red = '#E01A2B',
  darkRed = '#AB0000',
  lightRed = '#eea1a1',
  darkBlue = '#2c2c37',
  green = '#008757',
  black = '#000',
  white = '#FFF',
  gray1 = '#626369',
  gray2 = '#959499',
  gray3 = '#c0c0c0',
  gray4 = '#d6d6d6',
  gray5 = '#e6e6e6',
  gray6 = '#F1F1F1',
  gray7 = '#F8F8F8',
  transparent = 'transparent'
}

export const primaryColors = {
  red: '#E01A2B',
  darkRed: '#AB0000',
  lightRed: '#eea1a1',
  darkBlue: '#2c2c37',
  green: '#008757',
  black: '#000',
  white: '#FFF',
  gray1: '#626369',
  gray2: '#959499',
  gray3: '#c0c0c0',
  gray4: '#d6d6d6',
  gray5: '#e6e6e6',
  gray6: '#F1F1F1',
  gray7: '#F8F8F8',
  transparent: 'transparent'
}

export enum LoyaltyColors {
  gold = '#B19050',
  bronze = '#924B2C',
  silver = '#667479',
  platinum = '#959499'
}

export enum LoyaltyBgColors {
  gold = '#F4F4F5',
  bronze = '#F6F2F1',
  silver = '#F7F5F1',
  platinum = '#F3F3F4'
}

export enum PrimaryButtonColors {
  bg = PrimaryColors.black,
  bgHover = PrimaryColors.black,
  bgDisabled = PrimaryColors.gray2,
  text = PrimaryColors.white,
  textHover = PrimaryColors.white,
  textDisabled = PrimaryColors.white
}

export type ButtonColor =
  | 'bg'
  | 'bgHover'
  | 'bgDisabled'
  | 'text'
  | 'textHover'
  | 'textDisabled'
  | 'border'
  | 'borderHover'
  | 'borderDisabled'

export const primayButtonColors: Record<ButtonColor, string> = {
  bg: PrimaryColors.black,
  bgHover: PrimaryColors.black,
  bgDisabled: PrimaryColors.gray2,
  text: PrimaryColors.white,
  textHover: PrimaryColors.white,
  textDisabled: PrimaryColors.white,
  border: 'none',
  borderHover: 'none',
  borderDisabled: 'none'
}

export enum SecondaryButtonColors {
  bg = PrimaryColors.white,
  bgHover = PrimaryColors.white,
  bgDisabled = PrimaryColors.gray6,
  text = PrimaryColors.black,
  textHover = PrimaryColors.black,
  textDisabled = PrimaryColors.gray6,
  border = PrimaryColors.black,
  borderHover = PrimaryColors.black,
  borderDisabled = PrimaryColors.gray3
}

export const secondaryButtonColors: Record<ButtonColor, string> = {
  bg: PrimaryColors.white,
  bgHover: PrimaryColors.white,
  bgDisabled: PrimaryColors.gray6,
  text: PrimaryColors.black,
  textHover: PrimaryColors.black,
  textDisabled: PrimaryColors.gray1,
  border: PrimaryColors.black,
  borderHover: PrimaryColors.black,
  borderDisabled: PrimaryColors.gray3
}

export const ShadowColor = 'rgba(0,0,0,.1)'
