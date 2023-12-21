import React from "react";
import "../Style/HomeSection8.css";
import { Footer } from "./Footer";
import Montserrat from "@fontsource/montserrat";

export const HomeSection8 = () => {
  return (
    <>
      <section className="h-section-8 mt-1">
        <div className="container" style={{ fontFamily: "Montserrat" }}>
          <div className="text-center pt-5">
            <h1 style={{ color: "white" }} className="f-heading">
              It’s time to <span style={{ color: "#4a75f7" }}>start</span>{" "}
              investing in <br /> yourself
            </h1>
          </div>

          <div className="pt-5 footer-button text-center">
            <button className="btn btn-primary">Get Started</button>
          </div>

          <div className="pt-5 footer-img">
            <img
              src="https://ezitech.org/wp-content/uploads/2023/03/8-3-1441x555-copy-1438x554.webp"
              alt=""
              width={1100}
              style={{ marginTop: "150px" }}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
