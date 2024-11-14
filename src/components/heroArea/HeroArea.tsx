import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useGetData from "../../hooks/useGetData";

interface Props {
  type: boolean;
}
interface BannerItem {
  id: string;
  img: string;
  heading: string;
  motive: {
    m1: string;
    m2: string;
  };
  title: {
    t1: string;
    t2: string;
  };
}
interface RequestObject {
  banner: BannerItem[];
}

const HeroArea: React.FC<Props> = ({ type }) => {
  const request: RequestObject = useGetData({}, "/data/banner.json");
  const banner = request.banner;
  return (
    <>
      {banner?.length > 0 && (
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          speed={1500}
          autoplay={{ delay: 6500, disableOnInteraction: false }}
          id="home-1"
          className="homepage-slides"
        >
          {(type ? banner.slice(0, 4) : banner.slice(4)).map((item) => (
            <SwiperSlide key={item.id} className="single-slide-item">
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="overlay"></div>
              </div>
              <div className="hero-area-content">
                <div className="container">
                  <div className="row justify-content-center">
                    <div
                      className="col-lg-12 wow fadeInUp animated"
                      data-wow-delay=".2s"
                    >
                      <div className="section-title col-12 col-lg-6">
                        <h6>{item?.heading}</h6>
                        <h1>
                          {item?.motive?.m1}
                          <br />
                          <b>{item?.motive?.m2}</b>
                        </h1>
                        <p>
                          {item?.title?.t1}
                          <br />
                          {item?.title?.t2}
                        </p>
                      </div>
                      <Link to="/about" className="main-btn">
                        Czytaj wiecej
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default HeroArea;
