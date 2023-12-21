import React from "react";
import "../Style/HomeSection2.css";
import Montserrat from "@fontsource/montserrat";

export const HomeSection2 = () => {
  return (
    <section className="h-section-2">
      <div className="container">
        <div className="container-fluid mt-5">
          <div className="text-center" style={{ fontFamily: "Montserrat" }}>
            <h2 className="section-heading">Best IT Services Award 2023</h2>
          </div>
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-sm-4">
                <img
                  src="https://ezitech.org/wp-content/uploads/2023/03/Screenshot-2023-03-02-at-11.57.27-AM-1-486x562.png"
                  alt=""
                  className="award-img"
                />
              </div>

              <div className="col-sm-8 section-2-desc">
                <p className="section-2-paragraph">
                  <strong>
                    Ezitech Is affiliated With{" "}
                    <a
                      href="https://www.eziline.com/"
                      style={{ color: "blue" }}
                    >
                      Eziline Software House.
                    </a>
                  </strong>
                  &nbsp; Eziline has been awarded the prestigious Best Software
                  House in IT sector award by the President of Pakistan. This is
                  an incredible achievement and a testament to the hard work and
                  dedication of the entire team at Eziline Software House. The
                  award is a great recognition of the company’s achievements in
                  the field of IT and serves as a major milestone in its journey
                  towards success.
                </p>

                <p className="section-2-paragraph">
                  This award is a huge source of motivation and inspiration for
                  the entire team at Eziline Software House.{" "}
                  <strong>
                    It is a validation of the company’s commitment to
                    innovation, excellence, and customer satisfaction.{" "}
                  </strong>
                  The award acknowledges the hard work and dedication of every
                  member of the team who has contributed to the success of the
                  company.
                </p>

                <p className="section-2-paragraph">
                  <strong>
                    Ismail Shah, the CEO of Eziline Software House Pvt Ltd,
                  </strong>
                  received the Best Services Award in the IT sector from the
                  <strong> President of Pakistan, Dr. Arif Alvi,</strong> in
                  recognition of his remarkable contributions to the country’s
                  technology industry.
                </p>

                <button
                  className="btn btn-primary profile-btn"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Eziline Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
