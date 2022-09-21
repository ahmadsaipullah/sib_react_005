import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/ipul.png";

import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isredirect, setRedirect] = useState();
  const location = useLocation();
  useEffect(() => {
    setRedirect(location.pathname);
  }, [location]);

  const isActive1 = isredirect === "/" ? "active" : "";
  const isActive2 = isredirect === "/about" ? "active" : "";
  const isActive3 = isredirect === "/experienc" ? "active" : "";
  const isActive4 = isredirect === "/education" ? "active" : "";
  const isActive5 = isredirect === "/skils" ? "active" : "";
  const isActive6 = isredirect === "/interest" ? "active" : "";
  const isActive7 = isredirect === "/awards" ? "active" : "";
  return (
    <div className="sidebar">
      <h1>
        <Link to="/" className={isActive1}>
          AHMAD SAIFULLAH
        </Link>
      </h1>

      <img src={Logo} alt="gambar" />
      <p style={{ color: "black", fontWeight: "bold" }} className="gmail">
        ahmadsaipullah140@gmail.com
      </p>

      <ul className="sidebar-nav">
        <li className="sidebar-nav-items">
          <Link to="/about" className={isActive2}>
            About
          </Link>
        </li>
        <li className="sidebar-nav-items">
          <Link to="/experienc" className={isActive3}>
            Experienc
          </Link>
        </li>
        <li className="sidebar-nav-items">
          <Link to="/education" className={isActive4}>
            Education
          </Link>
        </li>
        <li className="sidebar-nav-items">
          <Link to="/skils" className={isActive5}>
            Skils
          </Link>
        </li>
        <li className="sidebar-nav-items">
          <Link to="/interest" className={isActive6}>
            Interests
          </Link>
        </li>
        <li className="sidebar-nav-items">
          <Link to="/awards" className={isActive7}>
            Awards
          </Link>
        </li>
      </ul>

      <div className="flip-card-back">
        <ul className="sidebar-nav">
          <li className="sidebar-nav-icons">
            {" "}
            <Link
              href="https://github.com/mittalsam98"
              rel="opener noreferrer"
              target="_blank"
              className="fa fas fa-github fa-lg"
            ></Link>
          </li>
          <li className="sidebar-nav-icons">
            <Link
              href="https://www.linkedin.com/in/sachin-mittal-476174158?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoRhF2EUsQJ%2BygJpLEZb%2FFA%3D%3D"
              rel="opener noreferrer"
              target="_blank"
              className="fa fas fa-linkedin fa-lg"
            ></Link>
          </li>
          <li className="sidebar-nav-icons">
            {" "}
            <Link
              href="https://twitter.com/Sachin_Mittal98"
              rel="opener noreferrer"
              target="_blank"
              className="fa fas fa-twitter fa-lg"
            ></Link>
          </li>
          <li className="sidebar-nav-icons">
            {" "}
            <Link
              href="https://www.instagram.com/decent_sachin.mittal/"
              rel="opener noreferrer"
              target="_blank"
              className="fa fas fa-instagram fa-lg"
            ></Link>
          </li>
          <li className="sidebar-nav-icons">
            {" "}
            <Link
              href="mailto:mittalsam98@gmail.com"
              rel="opener noreferrer"
              target="_blank"
              className="fa fas fa-envelope fa-lg"
            ></Link>
          </li>
          <li className="sidebar-nav-icons">
            {" "}
            <Link
              href="https://www.facebook.com/profile.php?id=100011989067867"
              rel="opener noreferrer"
              target="_blank"
              className="fa fas fa-facebook fa-lg"
            ></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
