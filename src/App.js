import React, { Component } from 'react';
import './style/App.css';
import dataProvincial from './assets/data/dataProvincial.json';
import dataMunicipal from './assets/data/dataMunicipal.json'
import dataComunitat from './assets/data/dataComunitat.json'

import Selector from './components/Selector/Selector.jsx';
import ScaleSelector from './components/ScaleSelector/ScaleSelector.jsx';
import MapDisplayer from './components/MapDisplayer/MapDisplayer.jsx';
import CustomBarChart from './components/BarChart/BarChart.jsx';
import Footer from './components/Footer/Footer.jsx';

import Logo from './assets/images/logo.png';
import Banner from './assets/images/banner-bg.jpg';

const dataDict = {'Provincia': dataProvincial, 'Municipio': dataMunicipal, 'Comunidad Autónoma': dataComunitat}

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: ["Radon"],
      scale: "Provincia",
      data: dataProvincial,
      headers: Object.keys(dataProvincial[0]).slice(3)
    }
    console.log("DEFAULT STATE")
    console.log(this.state)
  }

  scaleValueChange(newValue) {
    this.setState({
      scale: newValue,
      display: [],
      data: dataDict[newValue],
      headers: Object.keys(dataDict[newValue][0]).slice(3)
    })
  }

  selectorValueChange(newValue) {
    if (this.state.display.includes(newValue)) {
      let filteredArray = this.state.display.filter(item => item !== newValue)
      this.setState({ display: filteredArray })
    }
    else {
      this.setState({
        display: [...this.state.display, newValue]
      })
    }
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
                    selected={display}
                    data={data}
                    scale={scale}
                    />
                </div>
              </div>
            </div>
            <div className="chart-wrapper">
                <CustomBarChart
                  data={data} 
                  selected={display}
                  scale={scale} 
                />
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
