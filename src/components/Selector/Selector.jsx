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
    const { scaleSelected, selectedOption, headers } = this.props;
    let separatorElement = null;
    if(scaleSelected === 'Municipio') separatorElement = 1;
    else if(scaleSelected === 'Provincia') separatorElement = 1;
    else if(scaleSelected === 'Comunidad Autónoma') separatorElement = 4;
    console.log('scaleSelected = ', scaleSelected);
    return(
      <div className="list-style">
        <h2>{this.props.t('exposome_list')}</h2>
        <div>
        {headers.map((opt, index) => {
          return (
            <div className="radio" key={index}>
              <label className="container-radio" id={ separatorElement && index === separatorElement ? "separator" : "" }>
                <input
                  type="radio"
                  value={opt}
                  checked={selectedOption === opt}
                  onChange={this.onChangeValue}
                />
              <span className="checkmark"></span>
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
