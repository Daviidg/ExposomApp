import { feature } from 'topojson-client'
import { geoPath } from 'd3-geo'
import React from 'react'
import { geoConicConformalSpain } from 'd3-composite-projections'

import styles from '../style/maps.css'
import '../style/maps.css'
import communidadesMap from '../assets/maps/ca.json'
import provincesMap from '../assets/maps/provinces2.json'
import municipalitiesMap from '../assets/maps/municipalities2.json'
import canaryIslandsMap from '../assets/maps/canaryIslands.json'
import { UncontrolledReactSVGPanZoom } from 'react-svg-pan-zoom'
//import NumberDigits from './NumberDigits'

const projection = geoConicConformalSpain()

const SpainMap = React.memo((props) => {
  const { data, selected, scale, updateTooltip } = props
  const colorList = ['#02124C', '#003396', '#3373C4', '#73B9EE', '#86CEFA']
  const colorsNumber = Math.min(5,colorList.length)
  const maxValue = Math.max.apply(Math, data.map(k => k[selected]))
  const minValue = Math.min.apply(Math, data.map(k => k[selected]))

  console.log("SCALE", scale)
  var spainFeatures;
  var object;
  if (scale === 'Municipio') {
    spainFeatures = feature(municipalitiesMap, municipalitiesMap.objects.municipios).features
    object = [...spainFeatures]
    object.forEach((element) => {
    data.map((el) => {
      if (el.Municipi === element.properties.name) {
        Object.assign(element.properties, el)
      }
      return true})})
  }
  else if (scale === 'Provincia') {
    spainFeatures = provincesMap.features
    object = [...spainFeatures]
    object.forEach((element) => {
    data.map((el) => {
      if (el.Codigo === element.properties.codigo) {
        Object.assign(element.properties, el)
      }
      return true})})

  } else {
    spainFeatures = feature(communidadesMap, communidadesMap.objects.ESP_adm1).features
    const canaryIslandsFeatures = feature(canaryIslandsMap, canaryIslandsMap.objects.ESP_adm2).features
    object = [...spainFeatures, ...canaryIslandsFeatures]
    object.forEach((element) => {
      data.map((el) => {
        if (el.Name === element.properties.NAME || el.Name === element.properties.NAME_1) {
          Object.assign(element.properties, el)
        }
        return true})})
  }

  const geoFile = object

  const coloringMap = (porcentaje) => {
    const k = (maxValue-minValue)/colorsNumber;
    for (var i=0; i < colorsNumber; i++) {
      if (porcentaje >= maxValue-k*(i+1)) {
        return colorList[i]
      }
    }
    if (porcentaje >= minValue) {
      return colorList[colorList.length-1]
    }
    return "#bdc3c7"
  }

  const handleClick = (evt) => {
    console.log(evt)
  }

  const CanaryIslandsContainer = ({ closed }) => {
    const openContainerSVGPath = 'M 120,375 L 370,375 L 400,400 L 400, 510'
    const closedContainerSVGPath = 'M 120,375 L 370,375 L 400,400 L 400, 510 L 120,510 Z'
    const containerSVGPath = closed ? closedContainerSVGPath : openContainerSVGPath
    return (
      <path
        className={`${styles.enabled}`}
        d={containerSVGPath}
        key='path-canary-islands-box'
        fillOpacity={0.0}
        stroke='#BBBBBB'
        strokeWidth={1.0}
      />
    )
  }

  return (
    <div className='spain-map' data-tip='' data-for='toolitpMap'>
      {console.log("RENDERING")}
        <UncontrolledReactSVGPanZoom width={1217} height={800} background='#FFFFFF'>
          <svg className={styles.mapa} viewBox="0 0 0 0">
            <g className='ESP_adm1' transform="translate(-30,40), scale(1.45, 1.45)">
              <CanaryIslandsContainer closed={false} />
              {geoFile.map((d, i) => {
                return <path
                  className={`map-region`}
                  d={geoPath().projection(projection)(d)}
                  fill={coloringMap(d.properties[selected])}
                  key={`path-${i}`}
                  onMouseEnter={() => updateTooltip(d.properties)}
                  onMouseLeave={() => updateTooltip('')}
                  onClick={(evt) => handleClick(evt)}
                />
              })}

              <foreignObject width="100" height="200" x="150" y="80">
                <div>
                {colorList.slice(0, selected === 'Radon' ? 3 : 5).map((d,i) => {
                  return <div key={`leg-${i}`} className={'legend-box'}>
                    <div className={'legend-color'} style={{backgroundColor: d}}></div>
                    <p className={'legend-numbers'}>{`${Math.round((maxValue-(i)*(maxValue-minValue)/colorsNumber) * 100) / 100}-${Math.round((maxValue-(i+1)*(maxValue-minValue)/colorsNumber) * 100) / 100}`}
                    </p>
                  </div>
                 })}
                 </div>
              </foreignObject>
            </g>
          </svg>
      </UncontrolledReactSVGPanZoom>
    </div>
  )
})


export default SpainMap
