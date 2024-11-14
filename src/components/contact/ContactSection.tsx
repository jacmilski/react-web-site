import React from "react";

const ContactSection: React.FC = () => {
  return (
    <>
      <div className="contact-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="contact-page google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.5901218107088!2d17.937252576985934!3d53.31478647708413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47030441aa3d36a1%3A0x187b07a76217a6!2sOgrodowa%207%2C%2086-008%20Koronowo!5e0!3m2!1spl!2spl!4v1717869245899!5m2!1spl!2spl"
                  width="600"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="contact-form dark-bg">
                <div className="section-title">
                  <h2 className="text-white">Porozmawiajmy</h2>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Twoje imię*</label>
                      <input type="text" placeholder="Twoje imię" />
                    </div>
                    <div className="col-md-6">
                      <label>Email*</label>
                      <input type="email" placeholder="E-mail" />
                    </div>
                    <div className="col-12">
                      <label>Temat*</label>
                      <input type="text" placeholder="Temat" />
                    </div>
                    <div className="col-12">
                      <label>Wiadomość*</label>
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        placeholder="Write Here"
                      ></textarea>
                    </div>
                    <div>
                    <button type="submit" className="bordered-btn" onClick={() => window.location.href = "mailto:pawelzarebski7@wp.pl"}>
                      Wyślij teraz
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
