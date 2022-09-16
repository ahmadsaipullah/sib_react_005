import React from "react";
import Styles from "./ExternalCssModule.css";

const ExternalCssModule = () => {
  return (
    <>
      <div className={Styles.module}>
        <h1>Hello Word</h1>
      </div>
    </>
  );
};

export default ExternalCssModule;
