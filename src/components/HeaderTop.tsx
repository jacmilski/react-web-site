import React from "react";

const HeaderTop: React.FC = () => {
  return (
    <>
      <div className="header-top dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact-info">
              <a href="mailto:pawelzarebski7@wp.pl" style={{ color: 'white' }}><i className="las la-envelope"></i> pawelzarebski7@wp.pl</a>  |
                <i className="las la-map-marker"></i> Ogrodowa 7, 86-010 Koronowo
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-end">
              <div className="site-info">
                Zmieńmy wielkie idee na świetne produkty
                <div className="social-area">
                  <a href="https://www.facebook.com/profile.php?id=100005898434821" target="_blank">
                    <i className="lab la-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/pawelzarebski7/" target="_blank">
                    <i className="lab la-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/pawe%C5%82-zar%C4%99bski-94a951160/" target="_blank">
                    <i className="lab la-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
