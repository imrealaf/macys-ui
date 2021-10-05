# macys-ui

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/macys-ui.svg)](https://www.npmjs.com/package/macys-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save macys-ui
```

## Example usage of theme in app

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { theme } from 'macys-ui'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
```

## License

MIT © [](https://github.com/)
