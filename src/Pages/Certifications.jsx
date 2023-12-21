import React from "react";
import { Footer } from "../Components/Footer";
import Montserrat from "@fontsource/montserrat";

export const Certifications = () => {
  return (
    <>
      <div className="container">
        <div
          className="container-fluid mt-5"
          style={{ fontFamily: "Montserrat" }}
        >
          <div className="text-center">
            <h3>Free Certification Program:</h3>
          </div>

          <div className="mt-5">
            <p>
              At Ezitech, we believe in democratizing education and making it
              accessible to everyone. As part of our commitment to empowering
              individuals with valuable skills, we offer a selection of free
              certification programs in the field of Information Technology.
              These programs are designed to equip learners with fundamental
              knowledge and practical experience, paving the way for a
              successful career in IT.
            </p>

            <h6>Why Choose Our Free Certification Program?</h6>
            <ol>
              <li>
                <strong>No Cost, High Value:</strong> Our free certification
                courses provide the same quality of education as our paid
                programs, without any financial burden. Gain valuable skills
                without worrying about tuition fees.
              </li>
              <br />
              <li>
                <strong>Career Boost:</strong> Acquire in-demand IT skills that
                can enhance your resume, making you stand out to potential
                employers and increasing your employability.
              </li>
              <br />
              <li>
                <strong>Flexible Learning:</strong> Our free certification
                courses are available online, allowing you to learn at your own
                pace and from the comfort of your home.
              </li>
              <br />
              <li>
                <strong>Opportunity for Upskilling:</strong> Whether you’re a
                student, a working professional, or a career changer, our free
                certification programs offer an excellent opportunity to upskill
                and explore new career paths.
              </li>
              <br />
              <li>
                <strong>Supportive Community:</strong> Join a vibrant community
                of learners, where you can collaborate, share knowledge, and
                engage in discussions with peers and instructors.
              </li>
            </ol>

            <h6>Available Free Certification Programs:</h6>
            <ol>
              <li>Introduction to Python Programming</li>
              <li>Basics of Web Design and Development</li>
              <li>Cybersecurity Fundamentals</li>
              <li>Data Analytics with Excel</li>
              <li>Cloud Essentials for Beginners</li>
              <li>Flutter Development</li>
            </ol>
          </div>

          <div className="container-fluid mt-5">
            <div className="text-center">
              <h3>Paid Certification Program:</h3>
            </div>

            <div className="mt-5">
              <p>
                Our paid certification programs at Ezitech Institute are
                carefully curated to meet the demands of the ever-evolving IT
                industry. These comprehensive courses provide an in-depth
                understanding of advanced concepts and hands-on experience,
                ensuring that you gain practical skills and expertise required
                to excel in the IT sector.
              </p>

              <h6>Why Choose Our Paid Certification Program?</h6>
              <ol>
                <li>
                  <strong>Specialized Learning:</strong> Dive deep into
                  specialized IT domains, with industry-specific certifications
                  that cater to your specific career goals.
                </li>
                <br />
                <li>
                  <strong>Experienced Faculty:</strong> Learn from seasoned
                  professionals and experts in their respective fields, who
                  bring practical insights and real-world experience to the
                  classroom.
                </li>
                <br />
                <li>
                  <strong>Project-based Approach:</strong> Our paid
                  certification programs include practical projects and
                  assignments, allowing you to apply your knowledge to
                  real-world scenarios.
                </li>
                <br />
                <li>
                  <strong>Career Support:</strong> Benefit from our career
                  counseling and placement assistance, connecting you with
                  potential employers and job opportunities.
                </li>
                <br />
                <li>
                  <strong>Certification Validation:</strong> Upon successful
                  completion, receive industry-recognized certificates that
                  validate your expertise and enhance your professional
                  credibility.
                </li>
              </ol>

              <h6>Available Free Certification Programs:</h6>
              <ol>
                <li>Full Stack Web Development</li>
                <li>Graphics Designing</li>
                <li>CMS (WordPress)</li>
                <li>App Development</li>
                <li>Digital Marketing </li>
                <li>Data Science and Machine Learning</li>
              </ol>

              <h6>Invest in Your Future:</h6>
              <p>
                Choosing a paid certification program at Ezitech is an
                investment in your future. With our rigorous and
                industry-relevant curriculum, you will be equipped to take on
                the challenges of the IT world and unlock exciting opportunities
                for personal and professional growth.
              </p>

              <h6>Get Started:</h6>
              <p>
                Whether you opt for our free certification program or invest in
                our paid courses, Ezitech is dedicated to empowering you with
                the knowledge and skills needed to thrive in the dynamic
                landscape of Information Technology. Enroll today and embark on
                a transformative journey towards a successful IT career.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
