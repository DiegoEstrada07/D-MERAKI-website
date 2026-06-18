import ubication from '../assets/svg/location-logo.svg';
import phone from '../assets/svg/phone-logo.svg';
import whatsapp from '../assets/svg/whatsapp-logo.svg';
import mail from '../assets/svg/gmail-logo.svg'

import '../App.css';

function Footer(){
    return(
        <div>
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
    )
}

export default Footer;