import React, { Component } from 'react';
import CurrencyDisplay from './CurrencyDisplay';

const withCurrency = (BaseComponent) => (
  class Currency extends Component {
    constructor() {
      super()
      this.state = {
        currencyChosen: false,
        selectedCurrency: 'Select Currency',
        amount: 0
      }
    }

    handleOptionSelect = (evt) => {
			const userValue = evt.target.value
			this.setState(() => {
				return {
					selectedCurrency: userValue,
					currencyChosen: userValue === 'Select Currency' ? false : true
				}
			})
		}

    handleAmountIncrease = () => {
      this.setState((prevState) => {
        return {
          amount: prevState.amount + 1
        }
      })
    }

    handleAmountDecrease = () => {
			return (
				this.state.amount > 0 &&
				this.setState((prevState) => {
					return {
						amount: prevState.amount - 1
					}
				})
			)
		}

		handleOptionSelect = (evt) => {
			const userValue = evt.target.value
			this.setState(() => {
				return {
					selectedCurrency: userValue,
					currencyChosen: userValue === 'Select Currency' ? false : true
				}
			})
		}

    render() {
      const currencyData = [
        { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
        { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
        { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
        { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
        { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
      ]
      const currencyOptions = currencyData.map((currency, index) => (
        <option key={index} value={index}>
          {currency.name}
        </option>
      ))
      return (
        <>
          <select onChange={this.handleOptionSelect} value={this.state.selectedCurrency}>
            <option value='Select Currency'>Select Currency</option>
            {currencyOptions}
          </select>
          <div>
            <button onClick={this.handleAmountIncrease} className='add'>+</button>
            <button onClick={this.handleAmountDecrease} className='minus'>-</button>
          </div>
          {this.state.currencyChosen 
            ? <BaseComponent
							currency={currencyData[this.state.selectedCurrency]}
							amount={this.state.amount} />
					  : (
						<p>Please Select Currency</p>
					)}
        </>
      )
    }
  }
)

const ExchangedCurrency = withCurrency(CurrencyDisplay)

export default ExchangedCurrency