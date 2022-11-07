import React from "react";
import FigImage from "../common/Image";
import img1 from "../../public/images/Rectangle 188.png";
import Pagination from "../common/Pagination";

const LatestArticles = () => {
  return (
    <>
      <div className="latestarticles">
        <div className="row">
          <div className="col-md-4">
            <div
              className="calendar"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ display: "flex", marginTop: "10px" }}>
                <FigImage
                  src="/images/Vector1.png"
                  layout="intrinsic"
                  width={20}
                  height={20}
                  className="img-fluid"
                  alt="Choosing Agents Image"
                />
                <p style={{ marginLeft: "4px" }}>MARCH 21, 2022</p>
              </div>

              <div style={{ display: "flex", marginTop: "10px" }}>
                <FigImage
                  src="/images/Vector2.png"
                  layout="intrinsic"
                  width={15}
                  height={15}
                  className="img-fluid"
                  alt="Choosing Agents Image"
                />
                <p style={{ marginLeft: "4px" }}>5 MIN READ</p>
              </div>
            </div>

            <div className=" card">
              <FigImage
                src="/images/Rectangle 188.png"
                layout="fill"
                quality={100}
                alt="AgentBook Hero Image"
              />
            </div>

            <div class="card-body mt-3">
              <h3 class="card-text">How To Get Multiple Offers On Your Home</h3>
            </div>

            <div
              className="Multiple offer"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ display: "flex", marginTop: "10px" }}>
                <FigImage
                  src="/images/Ellipse 103.png"
                  layout="intrinsic"
                  width={20}
                  height={20}
                  className="img-fluid"
                  alt="Choosing Agents Image"
                />
                <p style={{marginLeft:"4px"}}>JOHN HOLLIE</p>
              </div>

              <div style={{ marginTop: "10px" }}>
                <FigImage
                  src="/images/Vector.png"
                  layout="intrinsic"
                  width={15}
                  height={15}
                  className="img-fluid"
                  alt="Choosing Agents Image"
                />
                Selling
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="calendar"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ display: "flex", marginTop: "10px" }}>
                <FigImage
                  src="/images/Vector1.png"
                  layout="intrinsic"
                  width={20}
                  height={20}
                  className="img-fluid"
                  alt="Choosing Agents Image"
                />
                <p style={{ marginLeft: "4px" }}>MARCH 21, 2022</p>
              </div>

              <div style={{ display: "flex", marginTop: "10px" }}>
                <FigImage
                  src="/images/Vector2.png"
                  layout="intrinsic"
                  width={15}
                  height={15}
                  className="img-fluid"
                  alt="Choosing Agents Image"
                />
                <p style={{ marginLeft: "4px" }}>5 MIN READ</p>
              </div>
            </div>
            <div className=" card">
              <FigImage
                src="/images/Rectangle 188 (1).png"
                layout="fill"
                quality={100}
                alt="AgentBook Hero Image"
              />
            </div>
            <div class="card-body">
              <h3 class="card-text mt-3">
                10Home Buying Tips for First-Time Home Buyers
              </h3>
            </div>

            <div
              className="Multiple offer "
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ display: "flex", marginTop: "10px" }}>
                <FigImage
                  src="/images/Ellipse 107.png"
                  layout="intrinsic"
                  width={20}
                  height={20}
                  className="img-fluid"
                  alt="Choosing Agents Image"
                />
                <p style={{marginLeft:"4px"}}>MAX HORTONS</p>
              </div>

              <div style={{ marginTop: "10px" }}>
                <FigImage
                  src="/images/Vector.png"
                  layout="intrinsic"
                  width={15}
                  height={15}
                  className="img-fluid"
                  alt="Choosing Agents Image"
                />
                Selling
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="calendar"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ display: "flex", marginTop: "10px" }}>
                <FigImage
                  src="/images/Vector1.png"
                  layout="intrinsic"
                  width={20}
                  height={20}
                  className="img-fluid"
                  alt="Choosing Agents Image"
                />
                <p style={{ marginLeft: "4px" }}>MARCH 21, 2022</p>
              </div>

              <div style={{ display: "flex", marginTop: "10px" }}>
                <FigImage
                  src="/images/Vector2.png"
                  layout="intrinsic"
                  width={15}
                  height={15}
                  className="img-fluid"
                  alt="Choosing Agents Image"
                />
                <p style={{ marginLeft: "4px" }}>5 MIN READ</p>
              </div>
            </div>
            <div className=" card">
              <FigImage
                src="/images/Rectangle 188 (2).png"
                layout="fill"
                quality={100}
                alt="AgentBook Hero Image"
              />
            </div>
            <div class="card-body mt-3">
              <h3 class="card-text">
                15 Simple And Relaxing Decor Idea To Transform Your Home
              </h3>
            </div>

            <div
              className="Multiple offer"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ display: "flex", marginTop: "10px" }}>
                <FigImage
                  src="/images/Ellipse 105.png"
                  layout="intrinsic"
                  width={20}
                  height={20}
                  className="img-fluid"
                  alt="Choosing Agents Image"
                />
                <p style={{marginLeft:"4px"}}>JOAN HOLLIE</p>
              </div>

              <div style={{ marginTop: "10px" }}>
                <FigImage
                  src="/images/Vector.png"
                  layout="intrinsic"
                  width={15}
                  height={15}
                  className="img-fluid"
                  alt="Choosing Agents Image"
                />
                Selling
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default LatestArticles;
