import React from "react";
import { Link, Outlet } from "react-router-dom";

const Members = () => {
  return (
    <>
      <h1>Members</h1>
      <p>Ini Adalah Halaman Members</p>
      <Link to="jhone doe">Jhone Doe</Link> |{" "}
      <Link to="doe jhone">Doe Jhone</Link>
      <Outlet />
    </>
  );
};

export default Members;
