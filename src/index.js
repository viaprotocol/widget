import * as React from 'react'
import ReactDOM from 'react-dom'

import logo from './logo.svg'
import prev from './prev.png'

import currencyETH from './currency-eth.svg'
import currencyBNB from './currency-bnb.svg'
import currencyMATIC from './currency-matic.svg'

import './styles.css'

const widgetDiv = document.getElementById('via-widget')

ReactDOM.render(
  <React.StrictMode>
    <App
      title={widgetDiv.dataset.title}
      amount={widgetDiv.dataset.amount}
      unit={widgetDiv.dataset.unit}
      set={widgetDiv.dataset.set}
      id={widgetDiv.dataset.id}
    />
  </React.StrictMode>,
  widgetDiv
)

function App({ title, amount, unit, set, id }) {
  const go = 'https://pay.via.exchange/nft/' + id

  return (
    <div id="via-widget-inner">
      <div id="via-title">{title}</div>
      <div id="via-status">
        <span id="via">Minted</span>
        {' '}
        <span id="via-amount">{amount || '?'}</span>
        {' '}
        <span id="via-unit">{unit || 'NFT'}s</span>
        {' '}
        <span id="via">in</span>
        {' '}
        <span id="via-set">{set || 'collection'}</span>
      </div>

      <div>
        <a id="via-prev-link" href={go} target="_blank" rel="noreferrer">
          <img src={process.env.PUBLIC_URL + prev} id="via-prev" alt="prev" width="354" height="84" />
        </a>
      </div>

      <div>
        <a id="via-mint-button" href={go} target="_blank" rel="noreferrer">
          <span>Mint now</span>
          <span id="via-currencies">
            <img src={process.env.PUBLIC_URL + currencyETH} alt="ETH" width="24" height="24" />
            <img src={process.env.PUBLIC_URL + currencyBNB} alt="BNB" width="24" height="24" />
            <img src={process.env.PUBLIC_URL + currencyMATIC} alt="MATIC" width="24" height="24" />
          </span>
        </a>
      </div>

      <div id="via-by">
        <span>by&nbsp;&nbsp;</span>
        <a href="https://via.exchange/" target="_blank" rel="noreferrer">
          <img src={process.env.PUBLIC_URL + logo} id="via-logo" alt="logo" />
        </a>
      </div>
    </div>
  )
}

