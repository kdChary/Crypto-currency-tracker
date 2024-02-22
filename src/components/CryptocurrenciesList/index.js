import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoData: []}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachData => ({
      id: eachData.id,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      currencyLogo: eachData.currency_logo,
    }))

    this.setState({isLoading: false, cryptoData: formattedData})
  }

  renderCryptocurrencyItem = () => {
    const {cryptoData} = this.state

    return (
      <ul className="cryptocurrency-item-list">
        <li className="cryptocurrency-list-header">
          <h1 className="list-title">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="crypocurrency"
            className="app-logo"
          />
        </li>
        {cryptoData.map(eachCurrency => (
          <CryptocurrencyItem
            key={eachCurrency.id}
            cryptocurrencyData={eachCurrency}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>{this.renderCryptocurrencyItem()}</>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
