import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./Router/Index";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="Container">
          <Router />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
