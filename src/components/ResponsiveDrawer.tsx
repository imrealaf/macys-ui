import React from 'react'
import {
  Box,
  Drawer,
  SwipeableDrawer,
  Toolbar,
  SwipeableDrawerProps
} from '@mui/material'

import { DrawerWidth } from 'theme/sizes'

export interface IResponsiveDrawerProps extends SwipeableDrawerProps {
  children: React.ReactNode
}

function ResponsiveDrawer({
  onClose,
  onOpen,
  children,
  ...props
}: IResponsiveDrawerProps) {
  const container = document.body
  const paperStyles: any = {
    boxSizing: 'border-box',
    width: DrawerWidth.default
  }

  const DrawerContent = () => (
    <Box>
      <Toolbar />
      {children}
    </Box>
  )

  return (
    <Box
      component='nav'
      sx={{ width: { sm: DrawerWidth.default }, flexShrink: { sm: 0 } }}
      role='navigation'
    >
      <SwipeableDrawer
        {...props}
        container={container}
        variant='temporary'
        onClose={onClose}
        onOpen={onOpen}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': paperStyles
        }}
      >
        <DrawerContent />
      </SwipeableDrawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': paperStyles
        }}
        open
      >
        <DrawerContent />
      </Drawer>
    </Box>
  )
}

export default ResponsiveDrawer
