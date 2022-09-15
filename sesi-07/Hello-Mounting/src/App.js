import Clock from "./components/Clock";
import Haluan from "./components/Haluan";
import ErrorBundarry from "./components/ErrorBundarry";

function App() {
  return (
    <div className="App">
      <div>
        <Clock />
        <hr />
        <Haluan />
        <hr />
        <ErrorBundarry />
      </div>
    </div>
  );
}

export default App;
