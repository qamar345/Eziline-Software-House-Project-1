import React from "react";
import Montserrat from "@fontsource/montserrat";
import "../Style/HomeSection1.css";

export const HomeSection1 = () => {
  return (
    <>
      <section className="section-bg">
        <div className="container">
          <div className="container-fluid h-section-1">
            <div
              id="carouselExampleFade"
              data-bs-ride="carousel"
              className="carousel slide carousel-fade"
            >
              <div className="carousel-inner">
                <div
                  className="carousel-item active text-center h-section-slide-1"
                  style={{ fontFamily: "Montserrat" }}
                >
                  <h2 className="h-section-slide-itme-1">
                    Learn the fundamentals with our
                  </h2>
                  <h1 className="h-section-slide-itme">
                    Our Experts in{" "}
                    <span style={{ color: "#64DEF5" }}>Programming</span>{" "}
                  </h1>
                </div>
                <div
                  className="carousel-item text-center h-section-slide-1"
                  style={{ fontFamily: "Montserrat" }}
                >
                  <h2 className="h-section-slide-itme-1">
                    Learn the fundamentals with our
                  </h2>
                  <h1 className="h-section-slide-itme">
                    Our Experts in{" "}
                    <span style={{ color: "#64DEF5" }}>Web Design</span>{" "}
                  </h1>
                </div>
                <div
                  className="carousel-item text-center h-section-slide-1"
                  style={{ fontFamily: "Montserrat" }}
                >
                  <h2 className="h-section-slide-itme-1">
                    Learn the fundamentals with our
                  </h2>
                  <h1 className="h-section-slide-itme">
                    Our Experts in{" "}
                    <span style={{ color: "#64DEF5" }}>Social Skills</span>{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Section Home Next */}
          <div className="container-fluid text-center mt-4 quote-section">
            <h3>Utilize Effective Training to Reach Your Potential!</h3>
          </div>

          <div className="container-fluid search-section mt-5 d-flex">
            {/* <form action=""> */}
            <input
              type="search"
              placeholder="Search courses..."
              className="form-control search"
            />
            <button className="btn btn-primary search-btn">
              <i className="fa-solid fa-search"></i>
            </button>
            {/* </form> */}
          </div>

          <div className="container-fluid mt-3 text-center product-section">
            <h4>
              Explore our more useful{" "}
              <a href="">
                {" "}
                products <i className="fa-solid fa-heart"></i>
              </a>
            </h4>
          </div>

          <div className="container-fluid brand-section text-center mt-3">
            <div className="row">
              <div className="col-sm-4">
                <img
                  src="https://ezitech.org/wp-content/uploads/2023/10/EZIBLOGS-DG.png"
                  alt=""
                  width={220.99}
                  height={50}
                />
              </div>

              <div className="col-sm-4">
                <img
                  src="https://ezitech.org/wp-content/uploads/2023/11/white-ezipos.png"
                  alt=""
                  width={175}
                  height={37}
                />
              </div>

              <div className="col-sm-4">
                <img
                  src="https://ezitech.org/wp-content/uploads/2023/10/EZIBLOGS-DG.png"
                  alt=""
                  width={220.99}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
