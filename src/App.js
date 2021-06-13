import React, { Component } from 'react';
import './style/App.css';
import dataProvincial from './assets/data/dataProvincial.json';
import dataMunicipal from './assets/data/dataMunicipal.json'
import dataComunitat from './assets/data/dataComunitat.json'

import Selector from './components/Selector/Selector.jsx';
import ScaleSelector from './components/ScaleSelector/ScaleSelector.jsx';
import MapDisplayer from './components/MapDisplayer/MapDisplayer.jsx';
import Footer from './components/Footer/Footer.jsx';

import Logo from './assets/images/logo.png';
import Banner from './assets/images/banner-bg.jpg';

const dataDict = {'Provincia': dataProvincial, 'Municipio': dataMunicipal, 'Comunidad Autónoma': dataComunitat}

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "Radon",
      scale: "Provincia",
      data: dataProvincial,
      headers: Object.keys(dataProvincial[0]).slice(3)
    }
  }

  scaleValueChange(newValue) {
    this.setState({
      scale: newValue,
      data: dataDict[newValue],
      headers: Object.keys(dataDict[newValue][0]).slice(3)
    })
  }

  selectorValueChange(newValue) {
    this.setState({
      display: newValue,
    })
  }

  render() {
    const { display, data, headers, scale } = this.state;
    return (
      <div>
        <div className="main-wrapper">
          <img src={Banner} alt="World Banner" className="banner-image"/>
          <div className="scroll-wrapper">
            <img src={Logo} alt="ExposomApp Logo" className="navbar-logo" />
            <div className="flex-wrapper">
              <div className="selector-wrapper">
                <div className="map-selector">
                  <ScaleSelector
                    selectedOption={scale}
                    changeValue={this.scaleValueChange.bind(this)}
                    headers = {headers}
                    />
                  <Selector
                    scaleSelected={scale}
                    selectedOption={display}
                    changeValue={this.selectorValueChange.bind(this)}
                    headers = {headers}
                    />
                </div>
              </div>
              <div className="map-wrapper">
                <div className="map-container">
                  <MapDisplayer
                    map={display}
                    data={data}
                    scale={scale}
                    />
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
