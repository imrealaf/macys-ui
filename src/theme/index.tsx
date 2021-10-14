import React from 'react'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import themes from '../themes'

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true
  }
}

type ThemeVariant = 'macys' | 'bloomingdales' // default macys theme (more tbd)

interface IThemeProps {
  variant: ThemeVariant
  withBaseline: boolean
  children: React.ReactNode
}

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
