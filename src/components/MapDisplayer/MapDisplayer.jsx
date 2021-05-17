import React, { Component } from "react";
import SpainMap from './../spainMap.jsx';
//import './MapDisplayer.css';

class MapDisplayer extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const { map, data, scale } = this.props;
    return(
      <div>
        <SpainMap data={data} selected={map} scale={scale} reportFound={'reportFound'} />
      </div>
    );
  }
}

MapDisplayer.defaultProps = {
  map: 'MapaEspanya1'
}

export default MapDisplayer;
