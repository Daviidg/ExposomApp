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
    console.log("PRESSED")
    console.log(event.target.value)
    this.props.changeValue(event.target.value);
  }

  render() {
    const { scaleSelected, selectedOption, headers } = this.props;

    console.log("SELECTED OPTION")
    console.log(selectedOption)
    let carcinogenos = [];
    let poblacional = [];
    headers.map((opt, index) => {
        let list_item = {};
        if(opt==='Arsenico' || opt==='Radon' || opt==='Lindano' || opt==='Particulas en suspensión 10'){
          list_item = { name: opt, type: 'Carcinogeno'}
          carcinogenos.push(list_item);
        }
        else {
          list_item = { name: opt, type: 'Poblacional'};
          poblacional.push(list_item);
        }
      return (carcinogenos, poblacional);
    });

    return(
      <div className="list-style">
        <h2>{this.props.t('exposome_list')}</h2>

        <h3>{this.props.t('Poblacional')}</h3>
        <div className="list-poblacional">
          {poblacional.map((opt, index) => {
            return (
              <div className="" key={index}>
                <label className="container">
                  <input
                    type="checkbox"
                    value={opt.name}
                    checked={selectedOption.includes(opt.name)}
                    onChange={this.onChangeValue}
                  />
                <span className="checkmark"></span>
                {this.props.t(opt.name)}
                </label>
              </div>
            )
          })}
        </div>

        <h3>{this.props.t('Carcinogenos')}</h3>
        <div className="list-carcinogenos">
          {carcinogenos.map((opt, index) => {
            return (
              <div className="" key={index}>
                <label className="container">
                  <input
                    type="checkbox"
                    value={opt.name}
                    checked={selectedOption.includes(opt.name)}
                    onChange={this.onChangeValue}
                  />
                <span className="checkmark"></span>
                {this.props.t(opt.name)}
                </label>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}



export default withTranslation()(Selector);
