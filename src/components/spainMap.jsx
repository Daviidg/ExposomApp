import { useState, useEffect, useRef } from 'react'
import { feature } from 'topojson-client'
import { geoPath } from 'd3-geo'
import { geoConicConformalSpain } from 'd3-composite-projections'
import ReactTooltip from 'react-tooltip'
import useHasMounted from '../hooks/useHasMounted'
//import { useTranslate } from './hooks/useTranslate'

//import NumberPercentage from './NumberPercentage'
import styles from '../style/maps.css'
import communidadesMap from '../assets/maps/ca.json'
import provincesMap from '../assets/maps/provinces.json'
//import municipalitiesMap from '../assets/maps/municipalities.json'
import canaryIslandsMap from '../assets/maps/canaryIslands.json'
//import NumberDigits from './NumberDigits'
//import { getPartialVacunationPopulation, getCompleteVacunationPopulation } from 'services/getProgressCalculations'

const projection = geoConicConformalSpain()

const SpainMap = ({ data, reportFound }) => {
  const [geoFile, setGeoFile] = useState([])
  const [content, setContent] = useState('')
  const [maxValue] = useState(Math.max.apply(Math, data.map(function(o) { return o.Valor; })))
  const [minValue] = useState(Math.min.apply(Math, data.map(function(o) { return o.Valor; })))
  const [colorList, setColorList] = useState(['#00414D', '#00778C', '#0097B3', '#00ADCC', '#00B8D9'])
  const [colorsNumber, setColorNumber] = useState(Math.min(5,colorList.length))

  //const translate = useTranslate()
  const hasMounted = useHasMounted()

  useEffect(() => {
    //const spainFeatures = feature(provincesMap, provincesMap.objects.provinces).features
    //const spainFeatures = municipalitiesMap.features
    const spainFeatures = feature(communidadesMap, communidadesMap.objects.ESP_adm1).features
    const canaryIslandsFeatures = feature(canaryIslandsMap, canaryIslandsMap.objects.ESP_adm2).features
    const object = [...spainFeatures, ...canaryIslandsFeatures]
    const values = data
    console.log("VALUES:", values)
    object.forEach((element) => {
      values.map((el) => {
        if (el.Parametro === element.properties.NAME || el.Parametro === element.properties.NAME_1) {
          Object.assign(element.properties, el)
        }
        return true
      })
    })
    console.log("OBJECT:", object)
    setGeoFile(object)
  }, [reportFound])

  

  const coloringMap = (porcentaje) => {
    const k = (maxValue-minValue)/colorsNumber;
    for (var i=0; i < colorsNumber; i++) {
      if (porcentaje > maxValue-k*(i+1)) {
        return colorList[i]
      }
    }
  }
  
  const tooltipText = ({
    Valor,
    Parametro,
    Agno
  }) => {
    return (
      <div className={styles.tooltip}>
        <p>{Parametro}</p>
        <p className={styles.tooltipSubText}>
          {Agno}
        </p>
        <p className={styles.tooltipSubText}>
          {Valor}
        </p>
      </div>
    )
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
    <>
      <div className={`mapa ${styles.container}`} data-tip='' data-for='toolitpMap'>
        <svg className={styles.mapa} viewBox='100 0 800 520'>
          <g className='ESP_adm1'>
            <CanaryIslandsContainer closed={true} />
            {geoFile.map((d, i) => (
              <path
                className={`${styles.enabled}`}
                d={geoPath().projection(projection)(d)}
                fill={coloringMap(d.properties.Valor)}
                key={`path-${i}`}
                onMouseEnter={() => setContent(tooltipText(d.properties))}
                onMouseLeave={() => setContent('')}
                stroke='#FFFFFF'
                strokeWidth={0.5}
              />
            ))}
            <foreignObject width="100" height="200" x="700" y="320">
              <div>
              {colorList.map((d,i) => {
                return <div key={`leg-${i}`} className={'legend-box'}> 
                  <div className={'legend-color'} style={{backgroundColor: d}}></div>
                  <p className={'legend-numbers'}>{`${Math.round(maxValue-(i)*(maxValue-minValue)/colorsNumber)}-${Math.round(maxValue-(i+1)*(maxValue-minValue)/colorsNumber)}`}
                  </p>
                </div>     
               })}
               </div>
            </foreignObject>
          </g>
        </svg>
        {hasMounted && <ReactTooltip id='toolitpMap'>{content}</ReactTooltip>}
      </div>
      <h2>Footer here</h2>
    </>
  )
}


export default SpainMap
