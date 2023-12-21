import React from "react";
import "../Style/HomeSection7.css";
import phone from "../Images/phone-copy.webp";
import google from "../Images/google-play.png";
import Montserrat from "@fontsource/montserrat";

export const HomeSection7 = () => {
  return (
    <section className="h-section-7">
      <div className="container">
        <div className="conatiner-fluid mt-5">
          <div className="row">
            <div className="col-sm-6 h-section-7-a">
              <img src={phone} alt="" width={400} height={713} />
            </div>

            <div
              className="col-sm-6 h-section-7-b"
              style={{ fontFamily: "Montserrat" }}
            >
              <h1 className="side-heading">
                Learning <span style={{ color: "#2575ED" }}>anytime</span>{" "}
                <br /> from anywhere
              </h1>
              <p className="side-meta">
                Increase the mobility level with Eziline Technologies LMS <br />{" "}
                App. Take your courses in your pocket and access them <br />{" "}
                whenever you want without any limits. Make your learning <br />{" "}
                more engaging and productive using modern LMS App.
              </p>

              <div className="d-flex mt-5 mb-5">
                <div>
                  <img
                    src="https://ezitech.org/wp-content/uploads/2022/11/appstore-copy.webp"
                    alt=""
                  />
                </div>
                &nbsp; &nbsp;
                <div>
                  <img src={google} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
