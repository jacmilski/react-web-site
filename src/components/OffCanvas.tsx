import React from "react";
import { Link } from "react-router-dom";
interface props {
  showOffcanvas: boolean;
  setShowOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
}

const OffCanvas: React.FC<props> = ({ setShowOffcanvas, showOffcanvas }) => {
  return (
    <>
      <div className={`extra-info ${showOffcanvas ? "active" : ""}`}>
        <div className="close-icon menu-close">
          <button onClick={() => setShowOffcanvas((p) => !p)}>
            <i className="las la-window-close"></i>
          </button>
        </div>
        <div className="logo-side mb-30">
          <a href="/" className="site-logo-2">
            <img src="/assets/img/novatech-white-logo.png" alt="Logo NovaTech" />
          </a>
        </div>
        <div className="side-info">
          <div className="contact-list mb-40">
            <h4>O nas</h4>
            <p>
              Serdecznie zapraszam do skorzystania z usług firmy w zakresie projektowania, administorwania systemami IT,
              wdrożeń systemów no code opartych o sztuczną inteligencję, wsparcia w zakresie S.E.O oraz grafiki komputerowej.
            </p>
            <div className="mt-30 mb-30">
              <Link to="/kontakt" className="main-btn">
                  Kontakt
              </Link>
            </div>
          </div>
          <div className="contact-list mb-40">
            <h4>Informacje kontaktowe</h4>
            <p>
              <i className="las la-rocket"></i>
              <span>
                Ogrodowa 7, 86-010 Koronowo
              </span>
            </p>
            <p>
              <i className="las la-phone"></i> <span>500234234</span>
            </p>
            <p>
              <i className="las la-envelope-open"></i>
              <span>pawelzarebski7@wp.pl</span>
            </p>
          </div>
        </div>
      </div>

      <div className={`offcanvas-overly ${showOffcanvas ? "active" : ""}`} onClick={() => setShowOffcanvas((p) => !p)}></div>
    </>
  );
};

export default OffCanvas;
