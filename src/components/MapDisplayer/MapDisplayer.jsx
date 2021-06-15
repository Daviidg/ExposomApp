import React, { Component } from "react";
import SpainMap from './../spainMap.jsx';
import ReactTooltip from 'react-tooltip'
import styles from '../../style/maps.css'
import { withTranslation } from 'react-i18next';

//import './MapDisplayer.css';

class MapDisplayer extends Component {
  constructor() {
    super();
    this.state = {content: ''}
  }

  updatetooltipText = (p) => {
    const { selected, scale, t } = this.props;
    var tooltip = ''
    if (p !== '') {
      tooltip =
        <div className={'tooltip'}>
          <p>{scale === 'Provincia' ? p.Provincia : (scale === 'Municipio' ? p.Municipio : p.Comunidad) }</p>
          {selected.map((sel, i) => {
            return (<p className={styles.tooltipSubText}>
              {`${t(sel)}: ${p[sel]}`}
            </p>)
          })}
       </div>
    }
    this.setState({content: tooltip})
  }

  render() {
    const { selected, data, scale } = this.props;
    return(
      <div className='map-displayer'>
        <SpainMap data={data} selected={selected} scale={scale} updateTooltip={this.updatetooltipText}/>
        <ReactTooltip id='toolitpMap'>{this.state.content}</ReactTooltip>
      </div>
    );
  }
}

MapDisplayer.defaultProps = {
  map: 'MapaEspanya1'
}

export default withTranslation()(MapDisplayer);
