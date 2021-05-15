import React, { Component } from "react";
import SpainMap from './../spainMap.jsx';
//import './MapDisplayer.css';

class MapDisplayer extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const { map, data } = this.props;
    return(
      <div>
        {map === 'MapaEspanya1' &&
        <SpainMap data={data} reportFound={'reportFound'} />}
        {map === 'MapaEspanya2' &&
        <span>Mapa Espanya 2</span>}
        {map === 'MapaEspanya3' &&
        <span>Mapa Espanya 3</span>}
      </div>
    );
  }
}

MapDisplayer.defaultProps = {
  map: 'MapaEspanya1'
}

export default MapDisplayer;
