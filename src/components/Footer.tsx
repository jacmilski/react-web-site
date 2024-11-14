import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-up">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="/" className="logo">
                <img src="/assets/img/novatech-white-logo.png" alt="logo NovaTech" />
              </a>
              <p>
                Potrzebujesz nowczesnej aplikacji. <br />
                Skontaktuj się ze mną i podziel swoją wizją
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5>Biuro</h5>
              <p>
                Polska <br />
                Ogrodowa 7, 86-010 Koronowo
              </p>
              <div className="company-email">
                <a href="#">pawelzarebski7@wp.pl</a>
              </div>
              <div className="phone-number">
                <p>500253245</p>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
              <h5>Linki</h5>
              <ul>
                <li>
                  <Link to="/uslugi">Usługi</Link>
                  <Link to="/projekty">Projekty</Link>
                  <Link to="/blog">Blog</Link>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h5>W kontakcie</h5>
              <ul>
                <li>
                  <div className="social-area">
                    <a href="https://www.facebook.com/profile.php?id=100005898434821" target="_blank">
                      <i className="lab la-facebook-f"></i>Facebook
                    </a>
                    <a href="https://www.instagram.com/pawelzarebski7/" target="_blank">
                      <i className="lab la-instagram"></i>Instagram
                    </a>
                    <a href="https://www.linkedin.com/in/pawe%C5%82-zar%C4%99bski-94a951160/" target="_blank">
                      <i className="lab la-linkedin"></i>Linkedin
                    </a>
                   
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
