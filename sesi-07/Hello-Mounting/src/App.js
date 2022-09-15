import Clock from "./components/Clock";
import Haluan from "./components/Haluan";
import ErrorBundarry from "./components/ErrorBundarry";
import TodoFunction from "./components/TodoFunction";
import ClockClass from "./components/ClockClass";
import LifeCycle from "./components/LifeCycle";

function App() {
  return (
    <div className="App">
      <div>
        {/* clock class */}
        <Clock />
        <hr />
        {/* clock function */}
        <ClockClass />
        <hr />
        {/* life cycle */}
        <LifeCycle />
        <hr />
        {/* haluan */}
        <Haluan />
        <hr />
        {/* error bunddary */}
        <ErrorBundarry />
        <hr />
        {/* todo function */}
        <TodoFunction />
      </div>
    </div>
  );
}

export default App;
