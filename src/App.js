import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar1 } from "./Components/Navbar1";
import { Navbar2 } from "./Components/Navbar2";
import { Footer } from "./Components/Footer";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Certifications } from "./Pages/Certifications";
import { Internship } from "./Pages/Internship";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar1 />
        <Navbar2 />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/internship-program" element={<Internship />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
