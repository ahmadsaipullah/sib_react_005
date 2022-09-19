import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About Us</Link> |{" "}
        <Link to="/members">Members</Link> | <Link to="/items">items</Link>
      </nav>
    </>
  );
};

export default Navbar;
