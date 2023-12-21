import React from "react";
import Montserrat from "@fontsource/montserrat";
import "../Style/Navbar2.css";
import { NavLink } from "react-router-dom";

export const Navbar2 = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ fontFamily: "Montserrat" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://ezitech.org/wp-content/uploads/2023/02/EZITECH-LOGO-white.png"
              alt="Logo"
              width={170}
            />
          </a>
          <button
            style={{ backgroundColor: "white" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ backgroundColor: "white" }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ fontFamily: "Montserrat" }}
            >
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">
                  ABOUT US
                </NavLink>
              </li>

              <li
                className="nav-item dropdown"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="Bottom"
                data-bs-content="Bottom popover"
              >
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/certifications"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CERTIFICATIONS
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/certifications">
                      Free Courses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/certifications">
                      Onsite Courses
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/internship-program">
                  INTERNSHIP
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EZI UPDATES
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Seminars
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      News & Updates
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BONUS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Skill Assignments
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  LOGIN
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Intern Portal
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Course Portal
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="d-flex">
              <div className="section-1-1">
                <a
                  href="https://ezitech.org/user-account/"
                  className="nav-link"
                >
                  <i className="fa-regular fa-heart"></i>
                </a>
              </div>

              <div className="section-1-2">
                <div
                  className="section-1-2-1 nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <i className="fa-solid fa-search"></i>
                </div>
              </div>

              <div className="section-1-3">
                <form action="">
                  <div className="d-flex">
                    <input
                      type="search"
                      className="form-control search-bar-nav"
                      name=""
                      id=""
                    />
                    <button className="btn btn-primary search-btn-nav">
                      <i className="fa-solid fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal */}

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <label htmlFor="">SEARCH</label>
                <br />
                <div className="d-flex">
                  <input type="search" className="form-control" name="" id="" />
                  <button className="btn btn-primary">
                    {" "}
                    <i className="fa-solid fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
