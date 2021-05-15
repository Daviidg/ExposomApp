import React, { Component } from "react";
//import './Selector.css';

class Selector extends Component {
  constructor() {
    super();
    this.state = {
    }
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    this.props.changeValue(event.target.value);
  }

  render() {
    const { selectedOption } = this.props;
    return(
      <div>
        <div onChange={this.onChangeValue}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="MapaEspanya1"
              checked={selectedOption === 'MapaEspanya1'}
              onChange={this.onValueChange}
            />
          MapaEspanya1
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="MapaEspanya2"
              checked={selectedOption === 'MapaEspanya2'}
              onChange={this.onValueChange}
            />
          MapaEspanya2
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="MapaEspanya3"
              checked={selectedOption === 'MapaEspanya3'}
              onChange={this.onValueChange}
            />
          MapaEspanya3
          </label>
        </div>
      </div>
      </div>
    );
  }
}

Selector.defaultProps = {
  value: 'MapaEspanya1'
}

export default Selector;
