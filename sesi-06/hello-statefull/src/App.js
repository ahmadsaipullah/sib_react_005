import React from "react";
import Users from "./Components/Users";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hooks from "./Components/Hooks";
import HooksUse from "./Components/HooksUse";
function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Users />
        <Footer />
        <hr />
        <Hooks />
        <hr />
        <HooksUse />
      </>
    </div>
  );
}

export default App;
