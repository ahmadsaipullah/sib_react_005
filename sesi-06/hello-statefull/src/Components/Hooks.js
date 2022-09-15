import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Hooks = () => {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <h1>Count : {count}</h1>
      <button className="btn btn-danger my-2" onClick={() => setCount(0)}>
        Reset
      </button>
      <br />
      <button
        className="btn btn-success my-2"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <button
        className="btn btn-primary my-2"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </Container>
  );
};

export default Hooks;
