import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip } from 'recharts'
import './BarChart.css'
import { withTranslation } from 'react-i18next';

const maxLines = 60
const colors = ['#6cd0ff', 'red', 'green', 'purple', 'orange', 'pink']

const CustomBarChart = ({ data, selected, scale }) => {
  const cleanData = normalizeBarCharData(data, selected, scale)
  const name = scale

  if (!cleanData) return <></>

  return (
    <>
      <div className="chartContainer">
        <div style={{ width: '100%', height: 600 }}>
          <ResponsiveContainer>
            <BarChart
              data={cleanData}
              margin={{
                top: 30,
                right: 0,
                left: 0,
                bottom: 50
              }}
            >
              <CartesianGrid strokeDasharray='3 3 3' />
              <XAxis dataKey={name} angle={-45} textAnchor="end" interval={0} fontSize='18' fontWeight='200' stroke='white'/>
              <YAxis interval='preserveStartEnd' width={80} scale='linear' fontSize='20' fontWeight='700' textAnchor='end' stroke='white'/>
              <Tooltip/>
              <Legend verticalAlign='top' style={{fontSize: '18px'}}/>
              { selected.map((sel, i) => {
                return <Bar dataKey={sel} fill={colors[i]}/>
              })}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  )
}

const normalizeBarCharData = (data, selected, scale) => {
  if (!data || !selected || !scale) return

  const sorted = data.sort((a,b) => (a[selected[0]] < b[selected[0]]) ? 1 : ((b[selected[0]] < a[selected[0]]) ? -1 : 0)).slice(0, maxLines)

  return sorted
}

export default withTranslation()(CustomBarChart);
