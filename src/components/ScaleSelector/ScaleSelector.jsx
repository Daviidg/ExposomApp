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
          <select className={"select"} onChange={this.onChangeValue} defaultValue={selectedOption}>
          {options.map((opt, index) => {
            return (
              <option
                value={opt}
                key={index}
                > {opt}
              </option>
            )
          })}
        </select>
      </div>
    );
  }
}

ScaleSelector.defaultProps = {
  value: 'provincial'
}


export default withTranslation()(ScaleSelector);
