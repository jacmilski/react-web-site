import React from "react";

const FooterBottom: React.FC = () => {
  return (
    <>
      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-center align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="copyright-line">
                © 2024 NovaTech. All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="privacy">Polityka prywatności | Warunki i regulamin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
