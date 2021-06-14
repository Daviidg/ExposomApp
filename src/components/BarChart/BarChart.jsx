import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
//import EtariosToolTip from './tooltips'
import styles from './styles/EtariosBarChart.module.css'
import { withTranslation } from 'react-i18next';

const maxLines = 60

const CustomBarChart = ({ data, selected, scale }) => {
  const dataChart = normalizeBarCharData(data, selected, scale)
  
  if (!dataChart) return <></>

  return (
    <>
      <div className={styles.chartContainer}>
        <div style={{ width: '100%', height: 450 }}>
          <ResponsiveContainer>
            <BarChart
              data={dataChart}
              margin={{
                top: 30,
                right: 0,
                left: 0,
                bottom: 50
              }}
            >
              <CartesianGrid strokeDasharray='3 3 3' />
              <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} fontSize='12' fontWeight='00' stroke='white'/>
              <YAxis interval='preserveStartEnd' width={50} scale='linear' fontSize='12' fontWeight='700' textAnchor='end' stroke='white'/>
              {/*<Tooltip content={<EtariosToolTip />} />*/}
              <Legend verticalAlign='top' />
              <Bar dataKey={selected} fill='#6cd0ff'/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  )
}

const normalizeBarCharData = (data, selected, scale) => {
  if (!data || !selected || !scale) return

  const dataChart = data.slice(0, maxLines).map((k, index) => {
    var name;
    if(scale === 'Municipio') name = k.Municipio;
    else if(scale === 'Provincia') name = k.Provincia;
    else if(scale === 'Comunidad Autónoma') name = k.Comunidad;

    const info = k[selected]

    return {
      name,
      [selected]: info
    }
  })

  const sorted = dataChart.sort((a,b) => (a[selected] < b[selected]) ? 1 : ((b[selected] < a[selected]) ? -1 : 0))

  return sorted
}

export default withTranslation()(CustomBarChart);
