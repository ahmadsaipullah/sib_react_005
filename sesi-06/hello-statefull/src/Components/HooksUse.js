import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const HooksUse = () => {
  const [count, setCount] = useState(0);
  //mirip dengan componenetDidMount dan ComponentDidUpdate;
  useEffect(() => {
    //Memperbarui judul dokumen menggunakan API Browser
    document.title = `you clicked ${count} times`;
  });
  return (
    <Container>
      <h1>You Cliked {count} times</h1>
      <button
        className="btn btn-danger my-2"
        onClick={() => setCount(count + 1)}
      >
        Clik Me
      </button>
    </Container>
  );
};

export default HooksUse;
