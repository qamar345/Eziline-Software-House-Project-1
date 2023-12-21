import React from "react";
import Montserrat from "@fontsource/montserrat";
import "../Style/About.css";
import slide1 from "../Images/s-1.jpg";
import slide2 from "../Images/s-2.jpg";
import slide3 from "../Images/s-3.jpg";
import slide4 from "../Images/s-4.jpg";
import slide5 from "../Images/s-5.jpg";
import slide6 from "../Images/s-6.jpg";
import slide7 from "../Images/s-7.jpg";
import slide8 from "../Images/s-8.jpg";
import slide9 from "../Images/s-9.jpg";
import slide10 from "../Images/s-10.jpg";
import logo1 from "../Images/slide-2-img-1.png";
import logo2 from "../Images/slide-2-img-2.png";
import logo3 from "../Images/slide-2-img-3.png";
import logo4 from "../Images/slide-2-img-4.png";
import logo5 from "../Images/slide-2-img-5.png";
import { Footer } from "../Components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const About = () => {
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

  return (
    <>
      <section className="about-section-0">
        <div className="container">
          <div className="container-fluid mt-5">
            <div className="text-center" style={{ fontFamily: "Montserrat" }}>
              <h3 className="about-section-heading">Our Identity</h3>
            </div>

            <div className="row mt-3">
              <div className="col-sm-6">
                <div
                  id="carouselExampleAutoplaying"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={slide1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={slide2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={slide3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={slide4} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={slide5} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={slide6} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={slide7} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={slide8} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={slide9} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={slide10} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              <div className="col-sm-6" style={{ fontFamily: "Montserrat" }}>
                <div>
                  <p className="about-p">
                    <strong>
                      Ezitech Is affiliated With Eziline Software House.
                    </strong>{" "}
                    In the last 7 years, Ezitech has trained thousands of
                    learners. All of our courses in web development, web design,
                    machine learning, app development, content management
                    systems, e-commerce, graphics design, and digital marketing
                    lead to employment and provide industrial experience.
                  </p>

                  <p className="about-p">
                    We also offer <strong>internships</strong> to our{" "}
                    <strong>students</strong>
                    form <strong>Eziline Software House</strong> so they develop
                    their abilities according to market demand. We train them in
                    the most recent technologies & frameworks using a fully
                    practical approach to programming.
                  </p>

                  <h4 className="about-h">Our Vision 😉</h4>

                  <p className="about-p">
                    Our mission is to enable every student in{" "}
                    <strong>practical to work while they are a student.</strong>{" "}
                    A student should be able to meet all of his financial
                    demands for his higher education, regardless of{" "}
                    <strong>
                      whether it is a home-based work or some other type of
                      part-time job.
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="container-fluid mt-5">
              <div className="text-center" style={{ fontFamily: "Montserrat" }}>
                <h3 className="about-section-heading">Registered with</h3>
              </div>
              <div className="row text-center mt-5">
                <Slider {...settings}>
                  <div className="col-sm-3 slick-slider-img">
                    <img src={logo1} alt="" />
                  </div>

                  <div className="col-sm-3 slick-slider-img">
                    <img src={logo2} alt="" />
                  </div>

                  <div className="col-sm-3 slick-slider-img">
                    <img src={logo3} alt="" />
                  </div>

                  <div className="col-sm-3 slick-slider-img">
                    <img src={logo4} alt="" />
                  </div>

                  <div className="col-sm-3 slick-slider-img">
                    <img src={logo5} alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <Footer />
    </>
  );
};
