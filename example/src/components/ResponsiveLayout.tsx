import React from 'react'
import { Box } from '@mui/material'

import { AppBarHeight, DrawerWidth } from '../theme/sizes'

interface IResponsiveLayoutProps {
  drawer: React.ReactNode
  children: React.ReactNode
}

function ResponsiveLayout({ drawer, children }: IResponsiveLayoutProps) {
  return (
    <div>
      {drawer || null}
      <Box
        component='main'
        sx={{
          position: 'absolute',
          top: { xs: AppBarHeight.sm, sm: AppBarHeight.default },
          width: drawer
            ? { xs: '100%', sm: `calc(100% - ${DrawerWidth.default}px)` }
            : {},
          ml: drawer ? { sm: `${DrawerWidth.default}px` } : {}
        }}
      >
        {children}
      </Box>
    </div>
  )
}

export default ResponsiveLayout
