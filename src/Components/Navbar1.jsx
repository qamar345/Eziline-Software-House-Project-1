import React from "react";
import "../Style/Navbar1.css";
import Poppins from "@fontsource/poppins";

export const Navbar1 = () => {
  return (
    <>
      <div className="containter top-header">
        <div className="container-fluid d-flex section-1 pt-3">
          <li className="nav-link" style={{ fontFamily: "Poppins" }}>
            <span className="fa fa-phone-flip"></span>
            &nbsp; +92 3455555396
          </li>
          <li className="nav-link">
            <span className="fa fa-location-dot"></span>
            &nbsp; Office #304-B Amna Plaza, Rawalpindi, Pakistan
          </li>
          <li className="nav-link">
            <span className="fa-regular fa-clock"></span>
            &nbsp; Mon - Fri 8.00 - 20.00{" "}
          </li>

          <div className="section-2 d-flex">
            <a href="https://facebook.com/ezitech" className="nav-link">
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a href="https://www.instagram.com/ezitechpk/" className="nav-link">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.behance.net/ezitech" className="nav-link">
              <i className="fa-brands fa-behance"></i>
            </a>

            <a
              href="https://www.linkedin.com/company/eziline-technologies/"
              className="nav-link"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://www.youtube.com/channel/UCPJvS7gvIV9nm6paydinYWg"
              className="nav-link"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="section-3 d-flex pt-3">
          <a href="https://ezitech.org/user-account/" className="nav-link">
            <i className="fa fa-user"></i>
            &nbsp; Login
          </a>
          &nbsp;
          <i className="fa-solid fa-pipe"></i>
          <a
            href="https://ezitech.org/user-account/?mode=register"
            className="nav-link"
          >
            {" "}
            Register
          </a>
        </div>
      </div>
    </>
  );
};
