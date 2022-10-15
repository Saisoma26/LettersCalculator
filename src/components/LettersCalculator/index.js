import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputphrase: ''}

  calculateletters = event => {
    const {value} = event.target
    this.setState({inputphrase: value})
  }

  render() {
    const {inputphrase} = this.state
    return (
      <div className="back">
        <div className="text-container">
          <h1 className="h1">Calculate the Letters you enter</h1>
          <label className="inputeltext" htmlFor="countel">
            Enter the phrase
          </label>
          <input
            className="input"
            type="text"
            id="countel"
            placeholder="Enter the phrase"
            onChange={this.calculateletters}
            value={inputphrase}
          />
          <div className="countdisplay">
            <p className="display">No.of letters: {inputphrase.length}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
