import './style/App.css';
import SpainMap from './components/spainMap.jsx';
import fumadores from './assets/data/fumadores-ccaa.json';
import Footer from './components/Footer/Footer.jsx';


import Logo from './assets/images/logo.png';
import Banner from './assets/images/banner-bg.jpg';

function App() {
  const data = fumadores.Datos.Metricas[0].Datos;
  // <SpainMap data={data} reportFound={'reportFound'} />
  return (
    <div>
      <div className="main-wrapper">
        <img src={Banner} alt="World Banner" className="banner-image"/>
        <img src={Logo} alt="ExposomApp Logo" className="navbar-logo" />
        <div className="scroll-wrapper">
          <div className="map-wrapper">
            <div className="map-container">
              <SpainMap data={data} reportFound={'reportFound'} />
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
