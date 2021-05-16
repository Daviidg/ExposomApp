import React, { Component } from 'react';
import './style/App.css';
import fumadores from './assets/data/fumadores-prov.json';
import jsonData from './assets/data/data.json';
import Selector from './components/Selector/Selector.jsx';
import MapDisplayer from './components/MapDisplayer/MapDisplayer.jsx';
import Footer from './components/Footer/Footer.jsx';

import Logo from './assets/images/logo.png';
import Banner from './assets/images/banner-bg.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "MapaEspanya1",
      data: jsonData,
      headers: Object.keys(jsonData[0]).slice(3)
    }
  }

  selectorValueChange(newValue) {
    this.setState({
      display: newValue,
    })
  }

  render() {
    const { display, data, headers } = this.state;
    return (
      <div>
        <div className="main-wrapper">
          <img src={Banner} alt="World Banner" className="banner-image"/>
          <div className="scroll-wrapper">
            <img src={Logo} alt="ExposomApp Logo" className="navbar-logo" />
            <div className="flex-wrapper">
              <div className="selector-wrapper">
                <div className="map-selector">
                  <Selector
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
                    headers={headers}
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
