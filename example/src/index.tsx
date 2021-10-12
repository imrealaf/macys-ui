import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { Theme } from 'macys-ui'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Theme variant='macys'>
        <App />
      </Theme>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
