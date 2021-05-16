import React, { Component } from "react";
import SpainMap from './../spainMap.jsx';
//import './MapDisplayer.css';

class MapDisplayer extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const { map, data, headers } = this.props;
    return(
      <div>
        <SpainMap data={data} selected={map} reportFound={'reportFound'} />
      </div>
    );
  }
}

MapDisplayer.defaultProps = {
  map: 'MapaEspanya1'
}

export default MapDisplayer;
