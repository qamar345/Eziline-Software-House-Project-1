import React, { useEffect, useState } from "react";
import "../Style/HomeSection6.css";
import Montserrat from "@fontsource/montserrat";

export const HomeSection6 = () => {
  const [condition, setCondition] = useState({});

  const [courseOne, setCourseOne] = useState({
    img: "https://ezitech.org/wp-content/uploads/2022/11/lqAnYIWetmy83To78KmRLYFY2Pb6INY7nVqpfrfE.jpg",
    price: "Free Courses",
    title: "Machine Learning & Data Science Bootcamp",
  });

  const [courseTwo, setCourseTwo] = useState({
    img: "https://ezitech.org/wp-content/uploads/2022/10/app-tips-google-my-business-00-hero.jpg",
    price: "Free Courses",
    title: "TripAdvisor, Google My Business, and Local SEO",
  });

  const [courseThree, setCourseThree] = useState({
    img: "https://ezitech.org/wp-content/uploads/2022/10/what-is-copywriter-hero.png",
    price: "Free Courses",
    title: "Content Marketing & Copywriting Course",
  });

  const [courseFour, setCourseFour] = useState({
    img: "https://ezitech.org/wp-content/uploads/2022/10/linkedin-search-630834c87e29b-sej-1520x800-1.png",
    price: "Free Courses",
    title: "LinkedIn Orientation",
  });

  const checkCondtion = () => {
    if (condition === "1") {
      setCourseOne({
        img: "https://ezitech.org/wp-content/uploads/2022/11/lqAnYIWetmy83To78KmRLYFY2Pb6INY7nVqpfrfE.jpg",
        price: "Free Courses",
        title: "Machine Learning & Data Science Bootcamp",
      });

      setCourseTwo({
        img: "https://ezitech.org/wp-content/uploads/2022/10/app-tips-google-my-business-00-hero.jpg",
        price: "Free Courses",
        title: "TripAdvisor, Google My Business, and Local SEO",
      });

      setCourseThree({
        img: "https://ezitech.org/wp-content/uploads/2022/10/what-is-copywriter-hero.png",
        price: "Free Courses",
        title: "Content Marketing & Copywriting Course",
      });

      setCourseFour({
        img: "https://ezitech.org/wp-content/uploads/2022/10/linkedin-search-630834c87e29b-sej-1520x800-1.png",
        price: "Free Courses",
        title: "LinkedIn Orientation",
      });
    }

    if (condition === "2") {
      setCourseOne({
        img: "https://ezitech.org/wp-content/uploads/2022/10/Instagram-vs-Facebook-Which-is-Better-for-Video-Marketing.png",
        price: "Free Courses",
        title: "Ads on Facebook, Instagram & Messenger",
      });

      setCourseTwo({
        img: "https://ezitech.org/wp-content/uploads/2022/10/What-is-a-digital-marketing-agency.webp",
        price: "Free Courses",
        title: "Definition For Digital Marketing",
      });

      setCourseThree({
        img: "https://ezitech.org/wp-content/uploads/2022/10/1294-Thumbnail.width-1200.jpg",
        price: "Free Courses",
        title: "YouTube ads and Google ads",
      });

      setCourseFour({
        img: "https://ezitech.org/wp-content/uploads/2022/10/post-3.jpg",
        price: "Free Courses",
        title: "Search Engine Optimization (SEO)",
      });
    }

    if (condition === "3") {
      setCourseOne({
        img: "https://ezitech.org/wp-content/uploads/2022/11/lqAnYIWetmy83To78KmRLYFY2Pb6INY7nVqpfrfE.jpg",
        price: "Free Courses",
        title: "Machine Learning & Data Science Bootcamp",
      });

      setCourseTwo({
        img: "https://ezitech.org/wp-content/uploads/2022/10/app-tips-google-my-business-00-hero.jpg",
        price: "Free Courses",
        title: "TripAdvisor, Google My Business, and Local SEO",
      });

      setCourseThree({
        img: "https://ezitech.org/wp-content/uploads/2022/10/what-is-copywriter-hero.png",
        price: "Free Courses",
        title: "Content Marketing & Copywriting Course",
      });

      setCourseFour({
        img: "https://ezitech.org/wp-content/uploads/2022/10/linkedin-search-630834c87e29b-sej-1520x800-1.png",
        price: "Free Courses",
        title: "LinkedIn Orientation",
      });
    }
  };

  useEffect(() => {
    checkCondtion();
  });

  return (
    <>
      <section className="h-section-6">
        <div className="container">
          <div className="container-fluid mt-5">
            <div className="row ">
              <div className="col-sm-6">
                <div
                  className="start mt-5"
                  style={{ fontFamily: "Montserrat" }}
                >
                  <h3 className="section-6-heading">Recent courses</h3>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="end mt-5" style={{ fontFamily: "Montserrat" }}>
                  <select
                    className="options"
                    name="option"
                    id=""
                    onChange={(e) => setCondition(e.target.value)}
                  >
                    <option className="option-value" value="1">
                      Release date (oldest first)
                    </option>
                    <option className="option-value" value="2">
                      Overall Rating
                    </option>
                    <option className="option-value" value="3">
                      Popular (most viewed)
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-sm-3">
                <div
                  className="card card-style"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  <img src={courseOne.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{courseOne.price}</p>
                    <h6 className="card-title">{courseOne.title}</h6>
                    <hr />
                    <strong className="text-end">Free</strong>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                <div
                  className="card card-style"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  <img src={courseTwo.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text"> {courseTwo.price}</p>
                    <h6 className="card-title">{courseTwo.title}</h6>
                    <hr />
                    <strong className="text-end">Free</strong>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                <div
                  className="card card-style"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                >
                  <img
                    src={courseThree.img}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">{courseThree.price}</p>
                    <h6 className="card-title">{courseThree.title}</h6>
                    <hr />
                    <strong className="text-end">Free</strong>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                <div
                  className="card card-style"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4"
                >
                  <img
                    src={courseFour.img}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">{courseFour.price}</p>
                    <h6 className="card-title">{courseFour.title}</h6>
                    <hr />
                    <strong className="text-end">Free</strong>
                  </div>
                </div>
              </div>

              <div
                className="text-center"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                <button
                  className="btn btn-primary load-more"
                  style={{
                    backgroundColor: "#356AC6",
                    fontFamily: "Montserrat",
                  }}
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img
                  src="https://www.gravatar.com/avatar/e332db0c7b9cc889a6d9f90d7008dcd5?s=215&r=g"
                  alt=""
                  width={40}
                  height={40}
                />
                &nbsp;
                <p>Ezitech</p>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="title">
                  <h5 className="modal-heading">
                    Machine Learning & Data Science Bootcamp
                  </h5>
                </div>

                <div className="meta">
                  <p></p>
                  Description: This is a best-selling Machine Learning and Data
                  Science course that was been updated with the most recent
                  trends and abilities for 20...
                </div>

                <div className="d-flex mt-5">
                  <div className="log-ico">
                    <i className="fa-solid fa-signal"></i>
                    <p>Advance</p>
                  </div>

                  <div className="log-ico">
                    <i className="fa-solid fa-list"></i>
                    <p>31 Leactures</p>
                  </div>

                  <div className="log-ico">
                    <i className="fa-solid fa-clock"></i>
                    <p>18h 34m</p>
                  </div>
                </div>
              </div>
              <div className="modal-foote preview-course">
                <button type="button" className="btn btn-primary">
                  PREVIEW THIS COURSE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img
                  src="https://www.gravatar.com/avatar/e332db0c7b9cc889a6d9f90d7008dcd5?s=215&r=g"
                  alt=""
                  width={40}
                  height={40}
                />
                &nbsp;
                <p>Ezitech</p>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body" style={{ fontFamily: "Montserrat" }}>
                <div className="title">
                  <h5 className="modal-heading">
                    Machine Learning & Data Science Bootcamp
                  </h5>
                </div>

                <div className="meta">
                  <p className="modal-meta">
                    Description: This is a best-selling Machine Learning and
                    Data Science course that was been updated with the most
                    recent trends and abilities for 20...
                  </p>
                </div>

                <div className="d-flex mt-5">
                  <div className="log-ico">
                    <i className="fa-solid fa-signal"></i>
                    <p className="other-spec">Advance</p>
                  </div>

                  <div className="log-ico">
                    <i className="fa-solid fa-list"></i>
                    <p className="other-spec">31 Leactures</p>
                  </div>

                  <div className="log-ico">
                    <i className="fa-solid fa-clock"></i>
                    <p className="other-spec">18h 34m</p>
                  </div>
                </div>
              </div>
              <div className="modal-foote preview-course">
                <button type="button btn-spec" className="btn btn-primary">
                  PREVIEW THIS COURSE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img
                  src="https://www.gravatar.com/avatar/e332db0c7b9cc889a6d9f90d7008dcd5?s=215&r=g"
                  alt=""
                  width={40}
                  height={40}
                />
                &nbsp;
                <p>Ezitech</p>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body" style={{ fontFamily: "Montserrat" }}>
                <div className="title">
                  <h5 className="modal-heading">
                    TripAdvisor, Google My Business, and Local SEO
                  </h5>
                </div>

                <div className="meta">
                  <p className="modal-meta">
                    Digital Marketing Course for beginners or freshly graduates
                    Requirements An Internet Connection. No Previous Knowledge
                    of Digital Marketing Is Re...
                  </p>
                </div>

                <div className="d-flex mt-5">
                  <div className="log-ico">
                    <i className="fa-solid fa-signal"></i>
                    <p className="other-spec">Advance</p>
                  </div>

                  <div className="log-ico">
                    <i className="fa-solid fa-list"></i>
                    <p className="other-spec">31 Leactures</p>
                  </div>

                  <div className="log-ico">
                    <i className="fa-solid fa-clock"></i>
                    <p className="other-spec">18h 34m</p>
                  </div>
                </div>
              </div>
              <div className="modal-foote preview-course">
                <button type="button btn-spec" className="btn btn-primary">
                  PREVIEW THIS COURSE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal3"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img
                  src="https://www.gravatar.com/avatar/e332db0c7b9cc889a6d9f90d7008dcd5?s=215&r=g"
                  alt=""
                  width={40}
                  height={40}
                />
                &nbsp;
                <p>Ezitech</p>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body" style={{ fontFamily: "Montserrat" }}>
                <div className="title">
                  <h5 className="modal-heading">
                    Content Marketing & Copywriting Course
                  </h5>
                </div>

                <div className="meta">
                  <p className="modal-meta">
                    Content Marketing and Copy Writing Course will help you to
                    enhance your career in digital marketing Requirements An
                    Internet Connection. No Previou...
                  </p>
                </div>

                <div className="d-flex mt-5">
                  <div className="log-ico">
                    <i className="fa-solid fa-signal"></i>
                    <p className="other-spec">Advance</p>
                  </div>

                  <div className="log-ico">
                    <i className="fa-solid fa-list"></i>
                    <p className="other-spec">31 Leactures</p>
                  </div>

                  <div className="log-ico">
                    <i className="fa-solid fa-clock"></i>
                    <p className="other-spec">18h 34m</p>
                  </div>
                </div>
              </div>
              <div className="modal-foote preview-course">
                <button type="button btn-spec" className="btn btn-primary">
                  PREVIEW THIS COURSE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal4"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img
                  src="https://www.gravatar.com/avatar/e332db0c7b9cc889a6d9f90d7008dcd5?s=215&r=g"
                  alt=""
                  width={40}
                  height={40}
                />
                &nbsp;
                <p>Ezitech</p>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body" style={{ fontFamily: "Montserrat" }}>
                <div className="title">
                  <h5 className="modal-heading">
                    {" "}
                    Search Engine Optimization (SEO)
                  </h5>
                </div>

                <div className="meta">
                  <p className="modal-meta">
                    Ezitech Learning Institute is providing Newbies and freshly
                    graduate students Free Linkedin Orientation Course that will
                    help you to enhance your s...
                  </p>
                </div>

                <div className="d-flex mt-5">
                  <div className="log-ico">
                    <i className="fa-solid fa-signal"></i>
                    <p className="other-spec">Advance</p>
                  </div>

                  <div className="log-ico">
                    <i className="fa-solid fa-list"></i>
                    <p className="other-spec">31 Leactures</p>
                  </div>

                  <div className="log-ico">
                    <i className="fa-solid fa-clock"></i>
                    <p className="other-spec">18h 34m</p>
                  </div>
                </div>
              </div>
              <div className="modal-foote preview-course">
                <button type="button btn-spec" className="btn btn-primary">
                  PREVIEW THIS COURSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
