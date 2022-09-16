import React from "react";
import External from "./External";
import ExternalCssModule from "./ExternalCssModule";
import ExternalObjeckVariabelCss from "./ExternalObjeckVariabelCss";
import Inline from "./Inline";
import ObjeckVariabel from "./ObjeckVariabel";
import StyledComponents from "./StyledComponents";

const Main = () => {
  return (
    <>
      <Inline />
      <ObjeckVariabel />
      <External />
      <ExternalCssModule />
      <ExternalObjeckVariabelCss />
      <StyledComponents />
    </>
  );
};

export default Main;
