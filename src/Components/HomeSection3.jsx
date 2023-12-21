import React from "react";
import Montserrat from "@fontsource/montserrat";
import signup from "../Images/signup.svg";
import learning from "../Images/learning.svg";
import courses from "../Images/online-courses.svg";
import "../Style/HomeSection3.css";

export const HomeSection3 = () => {
  return (
    <section className="h-section-3">
      <div className="container">
        <div
          className="container-fluid mt-5 text-center"
          style={{ fontFamily: "Montserrat" }}
        >
          <h3 className="section-3-heading">How it work?</h3>
        </div>

        <div className="conatiner-fluid" style={{ fontFamily: "Montserrat" }}>
          <div className="row">
            <div className="col-sm-4">
              <div class="card text-center border-0">
                <img
                  src={signup}
                  class="card-img-top"
                  alt="..."
                  width={247.88}
                  height={190.05}
                />
                <div class="card-body">
                  <h5 class="card-title-3">Sign up</h5>
                  <p class="card-text">
                    Enter your name, email, and contact details to get started.
                    It truly is that simple!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div class="card text-center border-0">
                <img
                  src={courses}
                  class="card-img-top"
                  alt="..."
                  width={247.88}
                  height={190.05}
                />
                <div class="card-body">
                  <h5 class="card-title-3">Select course</h5>
                  <p class="card-text">
                    Browse our extensive and ever-expanding variety of courses
                    forprofessional development.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div class="card text-center border-0">
                <img
                  src={learning}
                  class="card-img-top"
                  alt="..."
                  width={247.88}
                  height={190.05}
                />
                <div class="card-body">
                  <h5 class="card-title-3">Start learning</h5>
                  <p class="card-text">
                    Do the tasks, and your teacher will evaluate them before
                    providing you with thorough
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
