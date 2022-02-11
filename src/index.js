import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import App from './App'

const widgetDiv = document.getElementById('via-pay-widget')

ReactDOM.render(
  <React.StrictMode>
    <App some={widgetDiv.dataset.some} />
  </React.StrictMode>,
  widgetDiv
)
