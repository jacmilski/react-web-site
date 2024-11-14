import React from "react";
import { Link } from "react-router-dom";

const About1: React.FC = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12 col-sm-12 wow fadeInRight"
            data-wow-delay=".6s"
          >
            <div className="about-img">
              <img src="/assets/img/about/about.png" alt="" />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
            data-wow-delay=".2s"
          >
            <div className="info-content-area">
              <div className="section-title">
                <h6>Welcome to Industrify</h6>
                <h2>Great Experience for Industrial Solutions</h2>
              </div>
              <p className="highlight">
                Industrify is a leading international infrastructure group. They
                finance, develop, build and maintain innovative and efficient
                infrastructure that underpins daily life.
              </p>
              <br />
              <p>
                It provides infrastructure consultancy, facilities management,
                property management, energy and healthcare services.The key
                sectors served include education, health and defence.
                <br />
              </p>
              <div className="about-btn mt-40">
                <Link to="/about" className="main-btn">
                  About More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
