import Sidebar from "./Components/sidebar/Sidebar";
import Router from "./Router/Index";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="side">
          <nav className="navbar side navbar-expand-lg navbar-light p-0">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              style={{ zIndex: "1" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <Sidebar />
            </div>
          </nav>
        </div>
        <Router />
      </div>
    </>
  );
}

export default App;
