import {
  Box,
  AppBar,
  List,
  Toolbar,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MoreIcon from '@mui/icons-material/MoreVert'

import {
  ResponsiveDrawer,
  ResponsiveLayout,
  useToggle,
  useToggleByAnchor
} from 'macys-ui'

import Routes, { routesList } from 'router'
import navigation from 'data/navigation.json'
import ListItemLink from 'ListItemLink'
import Logo from './Logo'

function App() {
  const drawer = useToggle()
  const dropdown = useToggleByAnchor()

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='fixed'
          sx={{
            zIndex: 'modal',
            backgroundColor: 'white'
          }}
        >
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              aria-label='menu'
              sx={{ display: { sm: 'none' } }}
              onClick={drawer.toggle}
            >
              <MenuIcon />
            </IconButton>
            <Logo />
            <IconButton
              size='large'
              edge='end'
              onClick={dropdown.show}
              sx={{ marginLeft: 'auto' }}
            >
              <MoreIcon />
            </IconButton>
            <Menu
              anchorEl={dropdown.anchorEl}
              open={dropdown.open}
              onClose={dropdown.hide}
            >
              <MenuItem>Dropdown item 1</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <ResponsiveLayout
          drawer={
            <ResponsiveDrawer
              open={drawer.open}
              onClose={drawer.hide}
              onOpen={() => {}}
            >
              <List sx={{ py: 3 }}>
                {navigation.map((item, i) => (
                  <ListItemLink
                    key={i}
                    to={item.url}
                    primary={item.title}
                  ></ListItemLink>
                ))}
              </List>
            </ResponsiveDrawer>
          }
        >
          <Routes routes={routesList} />
        </ResponsiveLayout>
      </Box>
    </>
  )
}

export default App
