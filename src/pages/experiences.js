import test from '../assets/image/IMG-20260311-WA00511781055892.webp';

import '../App.css';


function Experiences(){
    return(
        <div>
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
        </div>
    )
}

export default Experiences;