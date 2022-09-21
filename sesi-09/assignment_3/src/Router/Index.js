import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Components/about/About";
import Experienc from "../Components/experienc/Experienc";
import Education from "../Components/education/Education";
import Skils from "../Components/skils/Skils";
import Interest from "../Components/interests/Interest";
import Awards from "../Components/awards/Awards";
import Header from "../Components/Header";

const Navigasi = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/experienc" element={<Experienc />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/skils" element={<Skils />} />
        <Route exact path="/Interest" element={<Interest />} />
        <Route exact path="/awards" element={<Awards />} />
      </Routes>
    </>
  );
};

export default Navigasi;
