import React, { Component } from "react";
import SpainMap from './../spainMap.jsx';
import ReactTooltip from 'react-tooltip'
import styles from '../../style/maps.css'

//import './MapDisplayer.css';

class MapDisplayer extends Component {
  constructor() {
    super();
    this.state = {content: ''}
  }

  updatetooltipText = (t) => {
    var tooltip = ''
    if (t !== '') {
      tooltip = 
        <div className={'tooltip'}>
          <p>{this.props.scale === 'Provincia' ? t.Provincia : (this.props.scale === 'Municipio' ? t.Municipio : t.Comunidad) }</p>
          <p className={styles.tooltipSubText}>
            {t[this.props.map]}
          </p>
       </div>
    }
    console.log("TOOLTIP", t)
    this.setState({content: tooltip})
  }

  render() {
    const { map, data, scale } = this.props;
    return(
      <div>
        <SpainMap data={data} selected={map} scale={scale} updateTooltip={this.updatetooltipText}/> 
        <ReactTooltip id='toolitpMap'>{this.state.content}</ReactTooltip>
      </div>
    );
  }
}

MapDisplayer.defaultProps = {
  map: 'MapaEspanya1'
}

export default MapDisplayer;
