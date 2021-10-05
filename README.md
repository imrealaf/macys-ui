# macys-ui

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/macys-ui.svg)](https://www.npmjs.com/package/macys-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save macys-ui
```

## Example Usage of Macy's Theme in an App

```tsx
import React from 'react'
import ReactDOM from 'react-dom'

// Import MUI Theme provider and/or base styles
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Import theme object from this package
import { theme } from 'macys-ui'

// The app
import YourApp from './YourApp'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <YourApp />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
```

## Example Usage of Hook

```tsx
import { Button, Dialog } from '@mui/material'
import { useToggle } from 'macys-ui'

function MyComponent() {
  /* contains all the methods/props necessary to contral a component like a Dialog */
  const dialog = useToggle()

  return (
    <>
      <Button onClick={dialog.show}>Toggle Dialog</Button>
      <Dialog open={dialog.open} onClose={dialog.hide}>
        ...
      </Dialog>
    </>
  )
}
```

## License

MIT © [](https://github.com/)
