/* eslint-disable jsx-a11y/anchor-is-valid */

// import { Nav, Row } from "react-bootstrap";

/* <Nav></Nav>
      <Row></Row> */

import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark sticky-top">
        <div class="container">
          <a class="navbar-brand text-white" href="#">
            Q-Temu
          </a>
          <div class="navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-white">Create Meetup</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white">Explorer</a>
              </li>
            </ul>
            <from class="d-flex">
              <button class="btn btn-primary" type="submit">
                Login
              </button>
            </from>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
