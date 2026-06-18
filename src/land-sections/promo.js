import promo from '../assets/promos/d-meraki-kids.webp';

import '../App.css';


function Promo(){
    return(
        <div>
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

export default Promo;