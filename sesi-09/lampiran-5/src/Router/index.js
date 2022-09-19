import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import AboutCompany from "../Pages/AboutCompany";
import AboutMe from "../Pages/AboutMe";
import Members from "../Pages/Members";
import Member from "../Pages/Member";
import Items from "../Pages/Items";
import Item from "../Pages/Item";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../Pages/Login";

const Navigasi = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />}>
          <Route exact path="aboutcompany" element={<AboutCompany />} />
          <Route exact path="aboutme" element={<AboutMe />} />
        </Route>

        <Route exact path="/members" element={<Members />}>
          <Route exact path=":memberName" element={<Member />} />
        </Route>

        <Route
          exact
          path="/items"
          element={
            <ProtectedRoute>
              <Items />
            </ProtectedRoute>
          }
        >
          <Route exact path=":itemId" element={<Item />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Navigasi;
