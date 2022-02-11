import * as React from 'react'
import ReactDOM from 'react-dom'

import logo from './logo.svg'
import './styles.css'

const widgetDiv = document.getElementById('via-pay-widget')

ReactDOM.render(
  <React.StrictMode>
    <App some={widgetDiv.dataset.some} />
  </React.StrictMode>,
  widgetDiv
)

function App(props) {
  return (
    <div className="via-widget">
      <div>
        <img src={logo} className="via-logo" alt="logo" />
      </div>
      Widget example 1 {props.some}
    </div>
  )
}
