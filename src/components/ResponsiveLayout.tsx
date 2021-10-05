import React from "react";
import { Box } from "@mui/material";

import { HeaderHeight, DrawerWidth } from "theme/sizes";

interface IResponsiveLayoutProps {
  drawer: React.ReactNode;
  children: React.ReactNode;
}

function ResponsiveLayout({ drawer, children }: IResponsiveLayoutProps) {
  return (
    <>
      {drawer ? drawer : null}
      <Box
        component="main"
        sx={{
          position: "absolute",
          top: { xs: HeaderHeight.sm, sm: HeaderHeight.default },
          width: drawer
            ? { xs: "100%", sm: `calc(100% - ${DrawerWidth.default}px)` }
            : {},
          ml: drawer ? { sm: `${DrawerWidth.default}px` } : {},
        }}
      >
        {children}
      </Box>
    </>
  );
}

export default ResponsiveLayout;
