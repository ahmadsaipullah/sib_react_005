import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="mt-4 p-5 mb-4 bg-light rounded-3 border">
        <div className="container">
          <Link
            to="/"
            className="btn btn-warning btn-lg"
            type="button"
            role="button"
          >
            Back to Home
          </Link>
          <div className="about">
            <h1 className="my-4">
              <b>About Me</b>
            </h1>
            <h5>
              <b>Name:</b> Ahmad Saifullah
            </h5>
            <h5>
              <b>Kode Peserta:</b> 008
            </h5>
            <h5>
              <b>Hobi</b>
              <br />
              1. Bermain Sepak Bola
              <br />
              2. Ngoding Tapi Masih Suka Malas
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
