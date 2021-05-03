//import './style/App.css';
import SpainMap from './components/spainMap.jsx'
import fumadores from './assets/data/fumadores-ccaa.json'

function App() {
  const data = fumadores.Datos.Metricas[0].Datos
  return (
    <div>
      <h1>ExposomApp</h1>
      <SpainMap data={data} reportFound={'reportFound'} />
    </div>
  );
}

export default App;
