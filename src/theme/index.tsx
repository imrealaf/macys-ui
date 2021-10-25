import React from 'react'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'

import * as themes from '../themes'

/**
 * MUI overrides
 */
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true
  }
}

export type ThemeColor =
  | 'inherit'
  | 'primary'
  | 'error'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'tertiary'
  | 'black'
  | 'gray1'
  | 'gray2'
  | 'gray3'
  | 'gray4'
  | 'gray5'
  | 'gray6'
  | 'gray7'
  | undefined

export type ThemeVariant = 'macys' | 'bloomingdales' // default macys theme (more tbd)

export interface IThemeProps {
  // The theme to laod
  variant: ThemeVariant

  // Inlclude MUI CSS bassline
  withBaseline: boolean

  // App
  children: React.ReactNode
}

/**
 * Theme
 * @description extended MUI Theme Provider to implement loaded theme
 */
function Theme({
  variant = 'macys',
  withBaseline = true,
  children
}: IThemeProps) {
  // Create theme based on variant prop
  const theme = createTheme(themes[variant])
  return (
    <ThemeProvider theme={theme}>
      {/* Conditionally include css baseline or not */}
      {withBaseline && <CssBaseline />}
      {children}
    </ThemeProvider>
  )
}

export default Theme
