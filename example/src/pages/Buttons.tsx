import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Container,
  Button
} from '@mui/material'

function Buttons() {
  return (
    <>
      <Container maxWidth={false} sx={{ p: 3 }}>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Buttons
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Typography variant='h5' sx={{ mb: 2 }}>
            Button variants
          </Typography>

          <Card variant='outlined' sx={{ backgroundColor: 'transparent' }}>
            <CardContent sx={{ p: 2, pt: 3 }}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained'>Contained</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined'>Outlined</Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant='h5' sx={{ mb: 2 }}>
            Button colors
          </Typography>

          <Card variant='outlined' sx={{ backgroundColor: 'transparent' }}>
            <CardContent sx={{ p: 2, pt: 3 }}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained'>Primary</Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='secondary'>
                    Secondary
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant='h5' sx={{ mb: 2 }}>
            Disabled buttons
          </Typography>

          <Card variant='outlined' sx={{ backgroundColor: 'transparent' }}>
            <CardContent sx={{ p: 2, pt: 3 }}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' disabled>
                    Primary
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='secondary' disabled>
                    Secondary
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' disabled>
                    OUtlined
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant='h5' sx={{ mb: 2 }}>
            Button sizes
          </Typography>
          <Card variant='outlined' sx={{ backgroundColor: 'transparent' }}>
            <CardContent sx={{ p: 2, pt: 3 }}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' size='small'>
                    Small
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained'>Default</Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' size='large'>
                    Large
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant='h5' sx={{ mb: 2 }}>
            Contextual buttons
          </Typography>
          <Card variant='outlined' sx={{ backgroundColor: 'transparent' }}>
            <CardContent sx={{ p: 2, pt: 3 }}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='info'>
                    Info
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='success'>
                    Success
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='warning'>
                    Warning
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='error'>
                    Error
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  )
}
export default Buttons
