import * as React from 'react'
import ReactDOM from 'react-dom'

import logo from './logo.svg'

import currencyETH from './currency-eth.svg'
import currencyBNB from './currency-bnb.svg'
import currencyMATIC from './currency-matic.svg'

import './styles.css'

// please don't remove `#via-widget` - it is in use
const widgetDivs = document.querySelectorAll('#via-widget, .via-widget')

widgetDivs.forEach(div => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        id={div.dataset.id}
      />
    </React.StrictMode>,
    div
  )
})


function App({ title, amount, unit, set, id }) {
  const urlParams = new URLSearchParams(window.location.search)
  const ref = urlParams.get('ref')
  const refUrlAddition = ref ? `?ref=${ref}` : ''

  const go = 'https://pay.via.exchange/nft/' + id + refUrlAddition

  return (
    <div id="via-widget-inner">
        <a id="via-mint-button" href={go} target="_blank" rel="noopener noreferrer">
          <span>Mint now</span>
          <span id="via-currencies">
            <img src={process.env.PUBLIC_URL + currencyETH} alt="ETH" width="24" height="24" />
            <img src={process.env.PUBLIC_URL + currencyBNB} alt="BNB" width="24" height="24" />
            <img src={process.env.PUBLIC_URL + currencyMATIC} alt="MATIC" width="24" height="24" />
          </span>
        </a>

      <p id="via-by">
        <span>by&nbsp;&nbsp;</span>
        <a href="https://via.exchange/" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + logo} id="via-logo" alt="logo" />
        </a>
      </p>
    </div>
  )
}
