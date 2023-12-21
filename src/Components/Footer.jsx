import React from "react";
import "../Style/Footer.css";
import Montserrat from "@fontsource/montserrat";

export const Footer = () => {
  return (
    <section className="footer-bg">
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <div>
                <h3
                  className="section-title"
                  style={{ fontFamily: "Montserrat" }}
                >
                  ABOUT
                </h3>
              </div>

              <p className="section-meta" style={{ fontFamily: "Montserrat" }}>
                Ezitech Institute provides a platform for newcomers to launch
                their IT and freelancing careers. Our emphasis on practical
                information technology courses that are career and work oriented
                makes us the top computer institute in Rawalpindi, Islamabad,
                Pakistan.
              </p>
            </div>

            <div className="col-sm-4">
              <div>
                <h3
                  className="section-title"
                  style={{ fontFamily: "Montserrat" }}
                >
                  POPULAR COURSES
                </h3>
              </div>
              <ul>
                <li className="f-section-1">
                  <a
                    className="d-flex"
                    href="https://ezitech.org/courses-ezitech/what-is-digital-marketing/"
                  >
                    <img
                      src="https://ezitech.org/wp-content/uploads/2022/10/What-is-a-digital-marketing-agency-300x300.webp"
                      alt=""
                      width={75}
                      height={75}
                    />
                    &nbsp;
                    <div style={{ fontFamily: "Montserrat" }}>
                      <h5 className="course-title">
                        Definition For Digital Marketing
                      </h5>
                      <p className="provide-by">By Ezitech</p>
                    </div>
                  </a>
                </li>

                <li className="f-section-1">
                  <a
                    className="d-flex"
                    href="https://ezitech.org/courses-ezitech/what-is-digital-marketing/"
                  >
                    <img
                      src="https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-75x75.png"
                      alt=""
                      width={75}
                      height={75}
                    />
                    &nbsp;
                    <div style={{ fontFamily: "Montserrat" }}>
                      <h5 className="course-title">
                        Online Arbitrage Mastermind 2.0 [R...
                      </h5>
                      <p className="provide-by">By Husnain Ali</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-2">
              <div>
                <h3
                  className="section-title"
                  style={{ fontFamily: "Montserrat" }}
                >
                  PAGES
                </h3>
              </div>
              <ul>
                <li>
                  <a
                    className="footer-link"
                    style={{ fontFamily: "Montserrat" }}
                    href=""
                  >
                    CONTACT US
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    style={{ fontFamily: "Montserrat" }}
                    href=""
                  >
                    SHOP
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    style={{ fontFamily: "Montserrat" }}
                    href=""
                  >
                    INTERNSHIP
                  </a>
                </li>

                <li>
                  <a
                    className="footer-link"
                    style={{ fontFamily: "Montserrat" }}
                    href=""
                  >
                    CODELAB
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-3 ">
              <div>
                <h3
                  className="section-title"
                  style={{ fontFamily: "Montserrat" }}
                >
                  CONTACT
                </h3>
              </div>
              <ul>
                <li className="d-flex">
                  <div>
                    <i className="fa fa-location-dot"></i>
                  </div>
                  &nbsp;
                  <div className="text" style={{ fontFamily: "Montserrat" }}>
                    Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi,
                    Punjab 46000
                  </div>
                </li>
                &nbsp;
                <li className="d-flex">
                  <div>
                    <i className="fa fa-phone"></i>
                  </div>
                  &nbsp;
                  <div className="text" style={{ fontFamily: "Montserrat" }}>
                    +92 3455555396
                  </div>
                </li>
                &nbsp;
                <li className="d-flex">
                  <div>
                    <i className="fa fa-envelope"></i>
                  </div>
                  &nbsp;
                  <div className="text" style={{ fontFamily: "Montserrat" }}>
                    ibrahim@eziline.com
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-sm text-center">
              <div className="copyright" style={{fontFamily:'Montserrat'}}>
                Copyright © 2023 Eziline technologies | Design & Develop by
                <a href="https://eziline.com/"> Eziline Software House </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};
