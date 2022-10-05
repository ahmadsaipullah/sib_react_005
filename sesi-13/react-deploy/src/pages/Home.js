import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="mt-4 p-5 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">why do we need test ?</h1>
          <p className="col-md-8 fs-4">
            To guarantee our code quality. and to show the people that we also
            care about id and wish to give something that already proven, at
            least by ourselft
          </p>
          <Link
            to="/users"
            className="btn btn-primary btn-lg"
            type="button"
            role="button"
          >
            Users List
          </Link>
          <br />
          <Link
            to="/about"
            className="btn btn-primary btn-lg mt-4"
            type="button"
            role="about"
          >
            About Me
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
