import {
  Box,
  AppBar,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Toolbar,
  Container,
  IconButton,
  Grid
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { ResponsiveDrawer, ResponsiveLayout, useToggle } from 'macys-ui'
import Logo from './Logo'

function App() {
  const drawer = useToggle()

  const menu = [
    {
      title: 'Example List Item'
    },
    {
      title: 'Another List Item'
    }
  ]

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
                {menu.map((item, i) => (
                  <ListItem button key={i}>
                    <ListItemText primary={item.title} />
                  </ListItem>
                ))}
              </List>
            </ResponsiveDrawer>
          }
        >
          <Container
            maxWidth={false}
            sx={{
              p: 3
            }}
          >
            <Typography variant='h4' sx={{ mb: 2 }}>
              Page Title
            </Typography>

            <Typography variant='h6' sx={{ mb: 2 }}>
              Buttons
            </Typography>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item>
                <Button>Primary</Button>
              </Grid>
              <Grid item>
                <Button disabled>Disabled</Button>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item>
                <Button variant='outlined'>Outlined</Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' disabled>
                  Disabled
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item>
                <Button color='secondary'>Secondary</Button>
              </Grid>
              <Grid item>
                <Button color='secondary' disabled>
                  Disabled
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item>
                <Button color='info'>Info</Button>
              </Grid>
              <Grid item>
                <Button color='success'>Success</Button>
              </Grid>
              <Grid item>
                <Button color='warning'>Warning</Button>
              </Grid>
              <Grid item>
                <Button color='error'>Error</Button>
              </Grid>
            </Grid>
          </Container>
        </ResponsiveLayout>
      </Box>
    </>
  )
}

export default App
