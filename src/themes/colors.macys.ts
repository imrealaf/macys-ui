export type ThemeVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'important'
  | 'alert'
  | 'error'
  | 'critical'

export enum Colors {
  primary = '#1274b7',
  secondary = '#303030',
  success = '#008757',
  info = '#374ea0',
  important = '#ffc627',
  alert = '#e01a2b',
  error = '#e01a2b',
  critical = '#f15a4f'
}

export enum LoyaltyColors {
  gold = '#B19050',
  bronze = '#924B2C',
  silver = '#667479',
  platinum = '#959499'
}

export enum TextColors {
  default = '#303030',
  fixed = '#ffffff',
  chrome = '#303030',
  disabled = '#a0a0a0'
}

export enum InverseTextColors {
  default = '#ffffff',
  placeholder = '#606060'
}

export enum ContrastTextColors {
  high = '#404040',
  medium = '#606060',
  low = '#a0a0a0'
}

export enum PrimaryActionColors {
  disabled = '#b0b0b0',
  hover = '#10659f',
  active = '#1274b7'
}

export enum SecondaryActionColors {
  disabled = '#b0b0b0',
  hover = '#f0f0f0',
  active = '#f0f0f0'
}

export enum BackgroundColors {
  chrome = '#ffffff',
  content = '#f7f7f7',
  component = '#f8f8f8'
}

export enum IconColors {
  disabled = '#b0b0b0',
  hover = '#404040',
  active = '#303030'
}

export enum ButtonColors {
  disabled = '#e6e6e6',
  hover = '#626369',
  active = '#000000',
  focus = '#0b4872'
}

export enum InlineButtonColors {
  disabled = '#a0a0a0',
  hover = '#404040',
  active = '#303030',
  focus = '#707070'
}

export enum ButtonTextColors {
  active = '#ffffff',
  disabled = '#d6d6d6'
}

export enum InlineButtonTextColors {
  active = '#ffffff',
  disabled = '#ffffff'
}

export const ShadowColor = 'rgba(0,0,0,.1)'
