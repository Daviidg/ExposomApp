import React, { Component } from "react";
import { withTranslation } from 'react-i18next';

import './Selector.css';

class Selector extends Component {
  constructor() {
    super();
    this.state = {}
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    this.props.changeValue(event.target.value);
  }

  render() {
    const { selectedOption, headers } = this.props;
    return(
      <div className="list-style">
        <h2>{this.props.t('exposome_list')}</h2>
        <div onChange={this.onChangeValue}>
        {headers.map((opt) => {
          return (
            <div className="radio">
              <label className="container-radio">
                <input
                  type="radio"
                  value={opt}
                  checked={selectedOption === opt}
                  onChange={this.onValueChange}
                />
              <span class="checkmark"></span>
              {this.props.t(opt)}
              </label>
            </div>
          )
        })}

      </div>
      </div>
    );
  }
}

Selector.defaultProps = {
  value: 'MapaEspanya1'
}


export default withTranslation()(Selector);
