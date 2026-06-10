import hero from './assets/image/IMG-20260311-WA00411781055892.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div class="logo">
            D'MERAKI
        </div>

        <nav class="nav">
            <a href="" class="active">Home</a>
            <a href="">Services</a>
            <a href="">Promotions</a>
            <a href="">Contact</a>
        </nav>
      </header>
      <main>
        <section class="hero">
          <div class="hero-content">
            <div class="hero-text">
              <span class="subtitle">BIENVENIDO A LA TRANQUILIDAD</span>
              <h1>
                Artesanos del <br></br>
                <em>Bienestar y Alma</em>
              </h1>
              <p>
              En D'MERAKI, fusionamos la ciencia del rejuvenecimiento
              con el alma del cuidado artesanal. Un espacio diseñado
              para restaurar tu equilibrio y realzar tu belleza natural.
              </p>
              <div class="buttons">
                <a href="" class="btn btn-primary">Explorar Servicios</a>
                <a href="" class="btn btn-outline">Contáctanos</a>
              </div>
            </div>
            <div class="hero-image">
              <img src={hero} alt="Spa Wellness"/>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default App;
