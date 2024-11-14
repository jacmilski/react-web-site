import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OffCanvas, SearchArea } from "..";
import "./header.css";
import MobileMenu from "./MobileMenu";

type OutletContextType = [boolean];

const HeaderArea: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("home");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  const [scrolled] = useOutletContext() as OutletContextType;

  return (
    <>
      <header className="header-area">
        <div
          className={`sticky-area ${scrolled ? "header__fixed is-sticky" : ""}`}
        >
          <div className="navigation">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="logo">
                    <Link className="navbar-brand" to="/">
                      <img src="/assets/img/novatech-logo.webp" alt="Logo NovaTech" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="main-menu">
                    <nav className="navbar navbar-expand-lg">
                      <button
                        onClick={() => setShowNav((p) => !p)}
                        className={`navbar-toggler ${showNav ? "active" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                      </button>

                      <div
                        className="collapse navbar-collapse justify-content-center prev-nav"
                        id="navbarSupportedContent"
                      >
                        <ul className="navbar-nav m-auto">
                          <li className="nav-item">
                            <a
                              onMouseEnter={() => setActiveMenu("home")}
                              className={`nav-link ${
                                activeMenu === "home" ? "active" : ""
                              }`}
                              href="/"
                            >
                              Główna
                              <span className="sub-nav-toggler"> </span>
                            </a>
                          </li>
                          <li className="nav-item smooth-menu">
                            <Link
                              to="/uslugi"
                              onMouseEnter={() => setActiveMenu("services")}
                              className={`nav-link ${
                                activeMenu === "services" ? "active" : ""
                              }`}
                            >
                              Usługi
                            </Link>
                          </li>

                          <li className="nav-item">
                            <a
                              onMouseEnter={() => setActiveMenu("projects")}
                              className={`nav-link ${
                                activeMenu === "projects" ? "active" : ""
                              }`}
                              href="#"
                            >
                              Projekty
                              <span className="sub-nav-toggler"> </span>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <Link to="/projekty">Projekty</Link>
                              </li>
                              <li>
                                <Link to="/project/p1">Szczegóły projektów</Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item">
                            <Link to="/blog"
                              onMouseEnter={() => setActiveMenu("blogs")}
                              className={`nav-link ${
                                activeMenu === "blogs" ? "active" : ""
                              }`}
                            >
                              Blog
                              <span className="sub-nav-toggler"> </span>
                            </Link>
                          </li>

                          <li className="nav-item smooth-menu">
                            <Link
                              to="/kontakt"
                              onMouseEnter={() => setActiveMenu("contact")}
                              className={`nav-link ${
                                activeMenu === "contact" ? "active" : ""
                              }`}
                            >
                              Kontakt
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <MobileMenu showNav={showNav} setShowNav={setShowNav} />
                    </nav>
                  </div>
                </div>
                <div className="col-lg-3 text-right">
                  <div className="header-right-content">
                    <div
                      onClick={() => setShowSearch((p) => !p)}
                      className="header-icon search-trigger"
                    >
                      <i className="las la-search"></i>
                    </div>

                    <div
                      onClick={() => setShowOffcanvas((p) => !p)}
                      className="header-icon menu-trigger"
                    >
                      <i className="las la-bars"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SearchArea showSearch={showSearch} setShowSearch={setShowSearch} />
      <OffCanvas
        showOffcanvas={showOffcanvas}
        setShowOffcanvas={setShowOffcanvas}
      />
    </>
  );
};

export default HeaderArea;
