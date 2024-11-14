import React from "react";
import useGetData from "../../hooks/useGetData";

interface details {
  id: string;
  img1: string;
  img2: string;
  img3: string;
  engineer: string;
  category: string;
  startDate: string;
  endDate: string;
  address: string;
  tags: string[];
}

interface RequestObject {
  details: details;
}

const Details: React.FC = () => {
  const request: RequestObject = useGetData({}, "/data/project-details.json");
  const details = request.details;
  return (
    <>
      <div className="project-single-section section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Industrial Solution in Central City</h3>
              <p>
                Fraud and financial crimes are a form of theft/larceny that
                occur when a person or entity takes money or property, or uses
                them in an illicit manner, with the intent.The analysis model
                employed in this study is multiple regression. The results
                indicate that variable namely, pressure, opportunity,
                rationalization, competence, and arrogance, simultaneously do
                not affect fraudulence financial statement.
              </p>
              <div className="row">
                <div className="col-lg-8">
                  <div className="project-feature-img mt-40">
                    <img src={details?.img1} alt="" />
                  </div>
                  <div className="project-overview">
                    <h4>Project Overview</h4>
                    <p>
                      Cases of fraud were found in Indonesia in 2017 involving
                      PT Jatisari Sri Rejeki. The company is cheating by
                      producing rice that is not suitable with standard quality
                      stated in the packaging label. The correlation of the case
                      against fraudulent financial statements is that there is a
                      difference in the inventory account contained in the
                      financial statements due to changes in the quality of
                      products made by the company.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="project-info">
                    <h5>Project Info</h5>
                    <p>
                      <b>Engineer:</b>
                      <span>{details?.engineer}</span>
                    </p>
                    <p>
                      <b>Category:</b>
                      <span>{details?.category}</span>
                    </p>
                    <p>
                      <b>Start Date:</b>
                      <span>{details?.startDate}</span>
                    </p>
                    <p>
                      <b>End Date:</b>
                      <span>{details?.endDate}</span>
                    </p>
                    <p>
                      <b>Address:</b>
                      <span>{details?.address}</span>
                    </p>
                    <p>
                      <b>Tags:</b>
                      <span>
                        {details?.tags?.length > 0 &&
                          details?.tags.map((tag, i) =>
                            i === details?.tags?.length - 1 ? tag : tag + ", "
                          )}
                      </span>
                    </p>
                    <div className="main-btn">View Project</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8"></div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="port-img mt-10 mb-50">
                <img src={details?.img2} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="port-img mt-10 mb-50">
                <img src={details?.img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
