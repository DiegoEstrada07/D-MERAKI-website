import hero from '../assets/image/IMG-20260311-WA00411781055892.webp';
import promo from '../assets/promos/d-meraki-kids.webp';
import test from '../assets/image/IMG-20260311-WA00511781055892.webp';


import '../App.css';


function Home (){
    return(
        <div>
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
                <article class="card">
                  <img src={test} alt="Belleza"/>
                  <div class="overlay"></div>
                  <h3>Belleza</h3>
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
        </div> 
    )
}

export default Home;