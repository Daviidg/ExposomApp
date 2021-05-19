import React, { Component } from "react";
import { withTranslation } from 'react-i18next';

import './../Selector/Selector.css';

const options = ["Municipio", "Provincia", "Comunidad Autónoma"]

class ScaleSelector extends Component {
  constructor() {
    super();
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    this.props.changeValue(event.target.value);
  }

  render() {
    const { selectedOption } = this.props;
    return(
      <div className="list-style">
        <h2>{this.props.t('data_detail')}</h2>
        <div onChange={this.onChangeValue}>
        {options.map((opt) => {
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

ScaleSelector.defaultProps = {
  value: 'provincial'
}


export default withTranslation()(ScaleSelector);
