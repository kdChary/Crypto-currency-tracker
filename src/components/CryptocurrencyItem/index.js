import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyData} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = cryptocurrencyData

  return (
    <li className="cryptocurrency-item">
      <div className="currency-details">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-value-card">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
