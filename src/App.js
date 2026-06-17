import hero from './assets/image/IMG-20260311-WA00411781055892.webp';
import test from './assets/image/IMG-20260311-WA00511781055892.webp';
import promo from './assets/promos/d-meraki-kids.webp';
import ubication from './assets/svg/location-logo.svg';
import phone from './assets/svg/phone-logo.svg';
import whatsapp from './assets/svg/whatsapp-logo.svg';
import mail from './assets/svg/gmail-logo.svg'

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
        <section class="experiencias">
          <div class="section-title">
            <h2>Nuestras Experiencias</h2>
            <span></span>
          </div>
          <div class="grid-experiencias">
            <article class="card">
              <img src={test} alt="Faciales"/>
              <div class="overlay"></div>
              <h3>Faciales</h3>
            </article>
            <article class="card">
              <img src={test} alt="Masajes"/>
              <div class="overlay"></div>
              <h3>Masajes</h3>
            </article>
            <article class="card">
              <img src={test} alt="Tratamientos Especiales"/>
              <div class="overlay"></div>
              <h3>Tratamientos Especiales</h3>
            </article>
            <article class="card">
              <img src={test} alt="Depilación IPL"/>
              <div class="overlay"></div>
              <h3>Depilación IPL</h3>
            </article>
            <article class="card">
              <img src={test} alt="Ozonoterapia"/>
              <div class="overlay"></div>
              <h3>Ozonoterapia</h3>
            </article>
            <article class="card">
              <img src={test} alt="Rejuvenecimiento Facial"/>
              <div class="overlay"></div>
              <h3>Rejuvenecimiento Facial</h3>
            </article>
          </div>
        </section>
        <section className="promo-section">
          <div className="promo-header">
            <span className="promo-tag">OFERTAS DE TEMPORADA</span>
            <h2>Promociones con Alma</h2>
          </div>

          <div className="promo-card">
            <img
              src={promo}
              alt="Spa promotion"
            />
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          {/* Left Section */}
          <div className="footer-column">
            <h2>D'MERAKI</h2>
          </div>

          {/* Contact Section */}
          <div className="footer-column">
            <h4>CONTACTO</h4>

            <div className="contact-item">
              <img className='icon'
                src={phone}
                alt=""
              />
              <span>teléfono: +52 5555759241</span>
            </div>

            <div className="contact-item">
              <img className='icon'
                src={whatsapp}
                alt=""
              />
              <span>whatsapp: +52 5549044704</span>
            </div>

            <div className="contact-item">
              <img className='icon'
                src={mail}
                alt=""
              />
              <span>correo gmail: spademeraki@gmail.com</span>
            </div>
          </div>

          {/* Location Section */}
          <div className="footer-column location">
            <h4>UBICACIÓN</h4>

            <div className="contact-item">
              <img className='icon'
                src={ubication}
                alt=""
              />
              <span>
                Calle Diagonal No. 35 interior 1 Col. Del Valle entre
                calle Eugenia y Av. San Antonio
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">

          
        </div>
      </footer>
    </div>
  );
}

export default App;
