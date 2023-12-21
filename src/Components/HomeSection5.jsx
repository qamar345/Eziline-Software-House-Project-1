import React, { useState } from "react";
import "../Style/HomeSection5.css";
import Montserrat from "@fontsource/montserrat";

export const HomeSection5 = () => {
  const [courseOne, setCourseOne] = useState({
    img: "https://ezitech.org/wp-content/uploads/2023/07/DartProgramming-aptlearn-300x225.webp",
    title: "Flutter & Dart - The Complete Course With Projects",
    category: "IOS & AND",
    duration: "3 Months",
    views: "7759",
    price: "PKR25.000",
  });

  const [courseTwo, setCourseTwo] = useState({
    img: "https://ezitech.org/wp-content/uploads/2023/07/5167842_cafe-300x225.webp",
    title: "Adobe Illustrator Course With Projects",
    category: "Designing",
    duration: "3 Months",
    views: "7044",
    price: "PKR35.000",
  });

  const [courseThree, setCourseThree] = useState({
    img: "https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-300x225.png",
    title: "Online Arbitrage Mastermind 2.0 [Resell Products from Home]",
    category: "Amazon",
    duration: "3 Months",
    views: "6894",
    discount: "PKR38.000",
    price: "PKR34.000",
  });

  const [courseFour, setCourseFour] = useState({
    img: "https://ezitech.org/wp-content/uploads/2023/07/photoshop-course-300x225.png",
    title: "Adobe Photoshop Advance Course",
    category: "Designing",
    duration: "1 Months",
    views: "2818",
    discount: "PKR18.000",
    price: "PKR15.000",
  });

  // let page1 = "";

  const pageOne = (e) => {
    if (e == 1) {
      setCourseOne({
        img: "https://ezitech.org/wp-content/uploads/2023/07/DartProgramming-aptlearn-300x225.webp",
        title: "Flutter & Dart - The Complete Course With Projects",
        category: "IOS & AND",
        duration: "3 Months",
        views: "7759",
        price: "PKR25.000",
      });

      setCourseTwo({
        img: "https://ezitech.org/wp-content/uploads/2023/07/5167842_cafe-300x225.webp",
        title: "Adobe Illustrator Course With Projects",
        category: "Designing",
        duration: "3 Months",
        views: "7044",
        price: "PKR35.000",
      });

      setCourseThree({
        img: "https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-300x225.png",
        title: "Online Arbitrage Mastermind 2.0 [Resell Products from Home]",
        category: "Amazon",
        duration: "3 Months",
        views: "6894",
        discount: "PKR38.000",
        price: "PKR34.000",
      });

      setCourseFour({
        img: "https://ezitech.org/wp-content/uploads/2023/07/photoshop-course-300x225.png",
        title: "Adobe Photoshop Advance Course",
        category: "Designing",
        duration: "1 Months",
        views: "2818",
        discount: "PKR18.000",
        price: "PKR15.000",
      });
    }
  };

  const pageTwo = (e) => {
    // alert(e);
    if (e === 2) {
      // page1 = "active";
      setCourseOne({
        img: "https://ezitech.org/wp-content/uploads/2022/09/sta-je-javascript-300x225.jpeg",
        title: "From Novice to expert, The Complete JavaScript Course 2022!",
        category: "Designing",
        duration: "3 Months",
        views: "1781",
        price: "Free",
      });

      setCourseTwo({
        img: "http://ezitech.org/wp-content/uploads/2023/07/FrontEnd-870x440-1-300x225.webp",
        title: "Free Advance Front-End Course with Projects",
        category: "Development",
        duration: "65 Days",
        views: "4855",
        price: "Free",
      });

      setCourseThree({
        img: "http://ezitech.org/wp-content/uploads/2022/10/react-300x225.jpeg",
        title: "The Complete Guide to React (incl Hooks, React Router, Redux)",
        category: "Designing",
        duration: "49h 24m",
        views: "1203",
        hidden: true,
        price: "Free",
      });

      setCourseFour({
        img: "http://ezitech.org/wp-content/uploads/2022/09/node_green_tutorial-300x225.png",
        title:
          "The Complete Bootcamp 2022: Node.js, Express, MongoDB, and More",
        category: "Development",
        duration: "42h 12m",
        views: "50",
        hidden: true,
        price: "Free",
      });
    }
  };

  return (
    <section className="h-section-5">
      <div className="container">
        <div
          className="container-fluid text-center mt-5"
          style={{ fontFamily: "Montserrat" }}
        >
          <h3 className="section-5-heading">Recommended Course's</h3>
        </div>

        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-sm-3">
              <div className="card h-section-5-card-1 border-0">
                <a href="" style={{ color: "black" }}>
                  <img src={courseOne.img} className="card-img-top" alt="..." />
                  <div className="card-body h-section-5-card-2">
                    <p className="course-category">{courseOne.category}</p>
                    <h5 className="card-title">{courseOne.title}</h5>
                    <div className="d-flex bar">
                      <div className="duration">
                        <i className="fa-regular fa-clock"></i>
                        &nbsp;
                        <span>{courseOne.duration}</span>
                      </div>

                      <div className="views">
                        <i className="fa-regular fa-eye"></i>
                        &nbsp;
                        <span>{courseOne.views}</span>
                      </div>
                    </div>

                    <hr />

                    <div
                      className="d-flex"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      <div className="rating">
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        &nbsp;
                        <span className="rating-2">0.0</span>
                      </div>

                      <div className="price">
                        <p className="actual-price">{courseOne.price}</p>
                      </div>
                    </div>
                    <div className="preview">
                      <br />
                      <a href="#" className="btn btn-primary">
                        Preview this course
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="card h-section-5-card-1 border-0">
                <a href="" style={{ color: "black" }}>
                  <img src={courseTwo.img} className="card-img-top" alt="..." />
                  <div className="card-body h-section-5-card-2">
                    <p className="course-category">{courseTwo.category}</p>
                    <h5 className="card-title">{courseTwo.title}</h5>
                    <div className="d-flex bar">
                      <div className="duration">
                        <i className="fa-regular fa-clock"></i>
                        &nbsp;
                        <span>{courseTwo.duration}</span>
                      </div>

                      <div className="views">
                        <i className="fa-regular fa-eye"></i>
                        &nbsp;
                        <span>{courseTwo.views}</span>
                      </div>
                    </div>

                    <hr />

                    <div
                      className="d-flex"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      <div className="rating">
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        &nbsp;
                        <span className="rating-2">0.0</span>
                      </div>

                      <div className="price">
                        <p className="actual-price">{courseTwo.price}</p>
                      </div>
                    </div>
                    <div className="preview">
                      <br />
                      <a href="#" className="btn btn-primary">
                        Preview this course
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="card h-section-5-card-1 border-0">
                <a href="" style={{ color: "black" }}>
                  <img
                    src={courseThree.img}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body h-section-5-card-2">
                    <p className="course-category">{courseThree.category}</p>
                    <h5 className="card-title">{courseThree.title}</h5>
                    <div className="d-flex bar">
                      <div className="duration">
                        <i className="fa-regular fa-clock"></i>
                        &nbsp;
                        <span>{courseThree.duration}</span>
                      </div>

                      <div className="views">
                        <i className="fa-regular fa-eye"></i>
                        &nbsp;
                        <span>{courseThree.views}</span>
                      </div>
                    </div>

                    <hr />

                    <div
                      className="d-flex"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      <div className="rating-1">
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        &nbsp;
                        <span className="rating-2">0.0</span>
                      </div>

                      <div className="price">
                        <p className="discount" hidden={courseThree.hidden}>
                          {courseThree.discount}
                        </p>
                        <p className="actual-price">{courseThree.price}</p>
                      </div>
                    </div>
                    <div className="preview">
                      <br />
                      <a href="#" className="btn btn-primary">
                        Preview this course
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="card h-section-5-card-1 border-0">
                <a href="" style={{ color: "black" }}>
                  <img
                    src={courseFour.img}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body h-section-5-card-2">
                    <p className="course-category">{courseFour.category}</p>
                    <h5 className="card-title">{courseFour.title}</h5>
                    <div className="d-flex bar">
                      <div className="duration">
                        <i className="fa-regular fa-clock"></i>
                        &nbsp;
                        <span>{courseFour.duration}</span>
                      </div>

                      <div className="views">
                        <i className="fa-regular fa-eye"></i>
                        &nbsp;
                        <span>{courseFour.views}</span>
                      </div>
                    </div>

                    <hr />

                    <div
                      className="d-flex"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      <div className="rating-1">
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        &nbsp;
                        <span className="rating-2">0.0</span>
                      </div>

                      <div className="price">
                        <p className="discount" hidden={courseFour.hidden}>
                          {courseFour.discount}
                        </p>
                        <p className="actual-price">{courseFour.price}</p>
                      </div>
                    </div>
                    <div className="preview">
                      <br />
                      <a href="#" className="btn btn-primary">
                        Preview this course
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="container-fluid text-center">
            <div className="pagination">
              <a className="number-1" onClick={(e) => pageOne(1)}>
                Prev
              </a>
              <a className="number-1" onClick={(e) => pageOne(1)}>
                1
              </a>

              <a className="number-1" onClick={(e) => pageTwo(2)}>
                2
              </a>

              <a className="number-1" onClick={(e) => pageTwo(2)}>
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
