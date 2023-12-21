import React, { useState } from "react";
import "../Style/Internship.css";
import Montserrat from "@fontsource/montserrat";
import Poppins from "@fontsource/poppins";
import Lato from "@fontsource/lato";
import internbg from "../Images/intern-bg-2.png";
import img1 from "../Images/slide-2-img-3.png";
import img2 from "../Images/slide-2-img-1.png";
import img3 from "../Images/slide-2-img-2.png";
import img4 from "../Images/slide-2-img-5.png";
import iphone0 from "../Images/Iphone-0.png";
import iphone1 from "../Images/Iphone-1.png";
import iphone2 from "../Images/Iphone-2.png";
import mou1 from "../Images/mou-1.png";
import mou2 from "../Images/mou-2.jpg";
import mou3 from "../Images/mou-3.png";
import mou4 from "../Images/mou-4.png";
import mou5 from "../Images/mou-5.png";
import mou6 from "../Images/mou-6.png";
import { Footer } from "../Components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Internship = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [awards, setAwards] = useState(0);
  const [exp, setExp] = useState(0);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  function clientCount() {
    setClients(clients + 1);
  }

  function projectsCount() {
    setProjects(projects + 1);
  }

  function awardsCount() {
    setAwards(awards + 1);
  }

  function expCount() {
    setExp(exp + 1);
  }

  if (clients !== 168) {
    setTimeout(clientCount, 1);
  }

  if (projects !== 4247) {
    setTimeout(projectsCount, 1);
  }

  if (awards !== 13506) {
    setTimeout(awardsCount, 1);
  }

  if (exp !== 5467) {
    setTimeout(expCount, 1);
  }

  return (
    <>
      <section className="intern-bg">
        <div className="container">
          <div
            className="container-fluid mt-5"
            style={{ fontFamily: "Poppins" }}
          >
            <div className="text-center">
              <h3 className="w-heading">Welcome to our Internship Program</h3>
              <h4 className="w-sub-heading">
                Where Similar Dreams Meet Unique Opportunities.
              </h4>

              <br />

              <p className="p-intern" style={{ fontFamily: "Lato" }}>
                Experience the future of IT with Ezitech's internship program,
                in collaboration with the acclaimed Eziline Software House. Dive
                into dynamic projects, gain invaluable insights, and accelerate
                your journey towards becoming an IT maestro.
              </p>

              <br />

              <button className="btn btn-primary">APPLY NOW</button>
              <div>
                <img src={internbg} alt="" className="intern-img" />
              </div>
            </div>
          </div>

          <div className="container-fluid mt-5">
            <div className="text-center">
              <h3 className="intern-headings">WE ARE PROUD TO SHOW NUMBERS</h3>
            </div>
            <div className="container text-center container-padding">
              <div className="row">
                <div className="col-sm p-3">
                  <div
                    className="card experience-start"
                    style={{ backgroundColor: "#b3006b", color: "white" }}
                  >
                    <div className="card-body">
                      <h1
                        className="count"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        {clients}
                      </h1>
                      <h5
                        className="card-title c-title"
                        style={{ fontFamily: "Poppins" }}
                      >
                        Current Interns
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-sm p-3">
                  <div
                    className="card experience"
                    style={{ backgroundColor: "#feb426", color: "white" }}
                  >
                    <div className="card-body">
                      <h1
                        className="count"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        {projects}
                      </h1>
                      <h5
                        className="card-title c-title"
                        style={{ fontFamily: "Poppins" }}
                      >
                        Completions
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-sm p-3">
                  <div
                    className="card experience"
                    style={{ backgroundColor: "#ff7701", color: "white" }}
                  >
                    <div className="card-body">
                      <h1
                        className="count"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        {awards}
                      </h1>
                      <h5
                        className="card-title c-title"
                        style={{ fontFamily: "Poppins" }}
                      >
                        Interviewed
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-sm p-3">
                  <div
                    className="card experience-end"
                    style={{ backgroundColor: "#fa2a57", color: "white" }}
                  >
                    <div className="card-body">
                      <h1
                        className="count"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        {exp}
                      </h1>
                      <h5
                        className="card-title c-title"
                        style={{ fontFamily: "Poppins" }}
                      >
                        Total Interns
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container" style={{ padding: "50px" }}>
            <div className="row">
              <div className="col-sm-5" style={{ marginTop: "50px" }}>
                <div
                  className="d-flex text-center widget-1"
                  style={{ fontFamily: "Poppins", marginTop: "150px" }}
                >
                  <p className="hr-lines">
                    Ezitech Affliate with Eziline Software House
                  </p>
                </div>

                <div>
                  <h2 className="widget-3" style={{ fontFamily: "Montserrat" }}>
                    Ezitech Proudly Collaborates With These Industry Titans
                  </h2>

                  <button
                    className="btn btn-primary"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <a href="https://www.youtube.com/embed/BJq4d1-lHq8?feature=oembed?playlist=BJq4d1-lHq8&mute=0&autoplay=0&loop=no&controls=0&start=0&end=">
                      <i className="fa-solid fa-play"></i>
                    </a>
                  </button>
                </div>
              </div>

              <div
                className="col-sm-7 text-center"
                style={{ alignItems: "center", marginTop: "50px" }}
              >
                <div className="row">
                  <div className="col text-center">
                    <div className="card card-color p-3">
                      {/* <span className="card-circle"> */}
                      <img src={img1} className="card-img-top" alt="box" />
                      {/* </span> */}
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{ fontFamily: "Montserrat" }}
                        >
                          PSEB
                        </h5>
                        <p
                          className="card-text"
                          style={{ fontFamily: "Poppins" }}
                        >
                          We've officially teamed up with the Pakistan Software
                          Export Board
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col mt-5">
                    <div className="card card-color p-3">
                      {/* <span className="card-circle"> */}
                      <img src={img2} className="card-img-top-1" alt="box" />
                      {/* </span> */}
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{ fontFamily: "Montserrat" }}
                        >
                          RCSTSI
                        </h5>
                        <p
                          className="card-text"
                          style={{ fontFamily: "Poppins" }}
                        >
                          We proudly rock the RCSTSI badge!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col text-center">
                    <div className="card card-color p-3">
                      {/* <span className="card-circle"> */}
                      <img
                        src={img3}
                        className="card-img-top-2 pasha-img"
                        alt="box"
                        width={200}
                        height={114}
                      />
                      {/* </span> */}
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{ fontFamily: "Montserrat" }}
                        >
                          PASHA
                        </h5>
                        <p
                          className="card-text"
                          style={{ fontFamily: "Poppins" }}
                        >
                          We're proudly rolling with teh PASHA crew!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col mt-5">
                    <div className="card card-color p-3">
                      {/* <span className="card-circle"> */}
                      <img src={img4} className="card-img-top-3" alt="box" />
                      {/* </span> */}
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{ fontFamily: "Montserrat" }}
                        >
                          FBR
                        </h5>
                        <p
                          className="card-text"
                          style={{ fontFamily: "Poppins" }}
                        >
                          We've got our official stamp of approval from the FBR
                          - We're fully legit!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid mt-5">
            <div className="text-center">
              <h3 className="intern-headings">FREQUENTLY ASKED QUESTIONS</h3>
            </div>

            <div className="row mt-5">
              <div className="col-sm-8" style={{ fontFamily: "Montserrat" }}>
                <div className="mt-5">
                  <a
                    className="question"
                    data-bs-toggle="collapse"
                    href="#collapseExample-1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <i className="fa-solid fa-caret-down"></i>
                    &nbsp; Is this Internship paid or Unpaid
                  </a>

                  <div className="collapse" id="collapseExample-1">
                    <div className="card card-body list-collapse">
                      <ol>
                        <li className="answer">
                          Our general Internship is unpaid but it depends upon
                          your skills.
                        </li>

                        <li className="answer">
                          For more details, you have to visit our office and
                          clear a short MCQ test.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <a
                    className="question"
                    data-bs-toggle="collapse"
                    href="#collapseExample-2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <i className="fa-solid fa-caret-down"></i>
                    &nbsp; What are the rules to follow during training period?
                  </a>

                  <div className="collapse" id="collapseExample-2">
                    <div className="card card-body list-collapse">
                      <ol>
                        <li className="answer">
                          Student Should come on time with proper attendance
                        </li>

                        <li className="answer">
                          Students should complete tasks given by Software Team
                        </li>
                        <li className="answer">
                          All girls and Boys should Come on their own convince
                        </li>

                        <li className="answer">
                          Holiday application should be submitted before any
                          leave
                        </li>
                        <li className="answer">
                          Projects should be Completed to get training letter
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <a
                    className="question"
                    data-bs-toggle="collapse"
                    href="#collapseExample-3"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <i className="fa-solid fa-caret-down"></i>
                    &nbsp; Will I get certificate after my traineeship?
                  </a>

                  <div className="collapse" id="collapseExample-3">
                    <div className="card card-body list-collapse">
                      <ol>
                        <li className="answer">
                          We provide an traineeship Completion certificate at
                          the end of the Session.
                        </li>

                        <li className="answer">
                          A certificate is given and can be verified any time
                          from our local website by adding its ID
                        </li>
                        <li className="answer">
                          We also provide Shield if any Student Goes beyond
                          required practicum Requirements.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <a
                    className="question"
                    data-bs-toggle="collapse"
                    href="#collapseExample-4"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <i className="fa-solid fa-caret-down"></i>
                    &nbsp; Is there any project tracking system?
                  </a>

                  <div className="collapse" id="collapseExample-4">
                    <div className="card card-body list-collapse">
                      <ol>
                        <li className="answer">
                          Each user get Intern Panel ID and Pass Where we
                          assigned Tasks and Projects
                        </li>

                        <li className="answer">
                          Each Intern Attendance Daily work each thing Tracked
                          Properly for Future Employers or Software Houses.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <a
                    className="question"
                    data-bs-toggle="collapse"
                    href="#collapseExample-5"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <i className="fa-solid fa-caret-down"></i>
                    &nbsp; I have already done practice, what if I need job?
                  </a>

                  <div className="collapse" id="collapseExample-5">
                    <div className="card card-body list-collapse">
                      <ol>
                        <li className="answer">
                          Yes, but we give test of 7 days to evaluate your
                          performance
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 iportal-slide">
                <div
                  id="carouselExampleAutoplaying"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={iphone0} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={iphone1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={iphone2} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-fluid mou-heading"
            style={{ fontFamily: "Montserrat" }}
          >
            <div className="text-center">
              <h3 className="intern-headings">
                Internship MoU with Universities
              </h3>
            </div>

            <div className="row mt-5">
              <Slider {...settings}>
                <div className="col-sm-3">
                  <div className="text-center intern-slider">
                    <img src={mou1} alt="" />
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="text-center intern-slider">
                    <img src={mou2} alt="" />
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="text-center intern-slider">
                    <img src={mou3} alt="" />
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="text-center intern-slider">
                    <img src={mou4} alt="" />
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="text-center intern-slider">
                    <img src={mou5} alt="" />
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="text-center intern-slider">
                    <img src={mou6} alt="" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          <div
            className="container-fluid mou-heading"
            style={{ fontFamily: "Montserrat" }}
          >
            <div>
              <h4>Internship Form</h4>
            </div>

            <div className="text-center mt-5">
              <p>Please Fill out all required fields</p>
            </div>

            <div className="mt-3">
              <form action="">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control inp-data"
                  name=""
                  id=""
                />
                <br />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control inp-data"
                  name=""
                  id=""
                />
                <br />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-control inp-data"
                  name=""
                  id=""
                />
                <br />
                <input
                  type="text"
                  placeholder="Complete Address"
                  className="form-control inp-data"
                  name=""
                  id=""
                />
                <br />
                <select className="form-control inp-data" name="" id="">
                  <option value="">Khyber Pakhtunkhwa</option>
                  <option value="">Punjab</option>
                  <option value="">Sindh</option>
                  <option value="">Balochistan</option>
                </select>
                <br />
                <input
                  type="text"
                  placeholder="Current Qualification"
                  className="form-control inp-data"
                  name=""
                  id=""
                />
                <br />
                <label htmlFor="">
                  Are your applying for Internship from University ? *
                </label>
                <select
                  className="form-control inp-data"
                  name=""
                  id=""
                  required
                >
                  <option value="">No</option>
                  <option value="">Yes</option>
                </select>
                <br />
                <label htmlFor="">
                  In Which Technology you want to do Internship* *
                </label>
                <select
                  className="form-control inp-data"
                  name=""
                  id=""
                  required
                >
                  <option value="">HTML/CSS</option>
                  <option value="">Python</option>
                  <option value="">Machine Learing</option>
                  <option value="">Graphic Desiging</option>
                  <option value="">VIDEO EDITING</option>
                </select>
                <br />
                <textarea
                  className="form-control inp-data"
                  placeholder="Why you are Appling For Internship ?"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <br />
                <textarea
                  className="form-control inp-data"
                  placeholder="Did you done any Project Before, Elaborate its Features and Titles"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <br />
                <textarea
                  className="form-control inp-data"
                  placeholder="Tell your Ability to Work Under Pressure"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <br />
                <textarea
                  className="form-control inp-data"
                  placeholder="What are your Expectations from the Internship ?"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>

                <br />

                <button className="btn btn-primary submit-btn">SUBMIT</button>
              </form>
            </div>
          </div>
          <br />
          <br />
        </div>
        <Footer />
      </section>
    </>
  );
};
