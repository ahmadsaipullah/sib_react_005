import React from "react";
import Hello from "./images/Hello.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={Hello} alt="gambar" width={1200} />
      </div>
    </>
  );
};

export default Header;
