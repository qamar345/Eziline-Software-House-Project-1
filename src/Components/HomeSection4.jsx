import React from "react";
import "../Style/HomeSection4.css";
import Montserrat from "@fontsource/montserrat";
import ai from "../Images/ai.png";
import blockchain from "../Images/blockchain.png";
import amazon from "../Images/amazon.png";
import cyber from "../Images/cyber.png";
import development from "../Images/development.png";
import design from "../Images/designing.png";
import gaming from "../Images/gaming.png";
import architect from "../Images/architect.png";
import mobile from "../Images/mobile.png";
import marketing from "../Images/marketing.png";
import threed from "../Images/3d.png";
import animation from "../Images/animation.png";

import "../Style/HomeSection4.css";
export const HomeSection4 = () => {
  return (
    <section className="h-section-4">
      <div className="container">
        <div
          className="conatiner-fluid mt-5 text-center"
          style={{ fontFamily: "Montserrat" }}
        >
          <h3 className="section-4-heading">
            What new trends and technology will <br /> you discover?
          </h3>
          <br />
          <p className="section-4-p">
            Today's technology is developing quickly, and our new technological
            trends are enabling and <br />
            advancing, speeding up the pace of development.
          </p>
        </div>

        <div
          className="container-fluid card-align"
          style={{ fontFamily: "Montserrat" }}
        >
          <div className="row">
            <div className="col-sm-2 card-hover">
              <a href="">
                <div className="card card-style text-center p-2">
                  <img
                    src={ai}
                    className="card-img-top card-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title-4">ML & AI</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-2 card-hover">
              <a href="">
                <div className="card card-style text-center p-2">
                  <img
                    src={blockchain}
                    className="card-img-top card-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title-4">Block Chain</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-2 card-hover">
              <a href="">
                <div className="card card-style text-center p-2">
                  <img
                    src={amazon}
                    className="card-img-top card-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title-4">Amazon</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-2 card-hover">
              <a href="">
                <div className="card card-style text-center p-2">
                  <img
                    src={cyber}
                    className="card-img-top card-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title-4">Cyber Security</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-2 card-hover">
              <a href="">
                <div className="card card-style text-center p-2">
                  <img
                    src={development}
                    className="card-img-top card-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title-4">Development</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-2 card-hover">
              <a href="">
                <div className="card card-style text-center p-2">
                  <img
                    src={design}
                    className="card-img-top card-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title-4">Designing</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Next Row */}

          <div className="row mt-4">
            <div className="col-sm-2 card-hover">
              <a href="">
                <div className="card card-style text-center p-2">
                  <img
                    src={gaming}
                    className="card-img-top card-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title-4">Gaming</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-2 card-hover">
              <a href="">
                <div className="card card-style text-center p-2">
                  <img
                    src={architect}
                    className="card-img-top card-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title-4">Architecture</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-2 card-hover">
              <a href="">
                <div className="card card-style text-center p-2">
                  <img
                    src={mobile}
                    className="card-img-top card-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title-4">IOS & AND</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-2 card-hover">
              <a href="">
                <div className="card card-style text-center p-2">
                  <img
                    src={marketing}
                    className="card-img-top card-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title-4">Marketing</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-2 card-hover">
              <a href="">
                <div className="card card-style text-center p-2">
                  <img
                    src={threed}
                    className="card-img-top card-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title-4">3D</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-2 card-hover">
              <a href="">
                <div className="card card-style text-center p-2">
                  <img
                    src={animation}
                    className="card-img-top card-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title-4">Animation</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
