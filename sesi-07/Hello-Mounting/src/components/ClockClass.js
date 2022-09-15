import React, { useState } from "react";

const ClockClass = () => {
  const [setData] = useState(new Date());

  function tick() {
    setData(new Date());
  }

  setInterval(() => tick(), 1000);

  return (
    <div>
      <h1>Hello, World</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default ClockClass;
