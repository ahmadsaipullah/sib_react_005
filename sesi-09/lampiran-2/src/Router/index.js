import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import AboutCompany from "../Pages/AboutCompany";
import AboutMe from "../Pages/AboutMe";

const Navigasi = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />}>
          <Route exact path="aboutcompany" element={<AboutCompany />} />
          <Route exact path="aboutme" element={<AboutMe />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navigasi;
