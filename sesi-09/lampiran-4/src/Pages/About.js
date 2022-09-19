import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>Ini Adalah Halaman About</p>
      <Link to="aboutcompany">About Company</Link> |{" "}
      <Link to="aboutme">About Me</Link>
      <Outlet />
    </>
  );
};

export default About;
