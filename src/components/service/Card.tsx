import React from "react";
import { ServiceItem } from "./Service1";
import { Link } from "react-router-dom";

interface Props {
  service: ServiceItem;
}

const Card: React.FC<Props> = ({ service }) => {
  return (
    <>
      <div className="single-service-area mb-50">
        <div className="service-img">
          <img src={service.img} alt={service.id} />
          <div className="service-icon">
            <span>
              <i className={service.icon}></i>
            </span>
          </div>
        </div>
        <div className="service-content white-bg">
          <h5>{service.heading}</h5>
          <p>{service.title}</p>
          <hr />
          <Link to="/services" className="read-more">
            <i className="las la-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
