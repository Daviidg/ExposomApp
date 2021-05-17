import React, { Component } from "react";
import { withTranslation } from 'react-i18next';

const options = ["municipal", "provincial", "comunitat"]

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
      <div>
        <h3>{this.props.t('exposome_list')}</h3>
        <div onChange={this.onChangeValue}>
        {options.map((opt) => {
          return (
            <div className="radio">
            <label>
              <input
                type="radio"
                value={opt}
                checked={selectedOption === opt}
                onChange={this.onValueChange}
              />
            {this.props.t(opt)}
            </label>
          </div>
        )})}

      </div>
      </div>
    );
  }
}

ScaleSelector.defaultProps = {
  value: 'provincial'
}


export default withTranslation()(ScaleSelector);