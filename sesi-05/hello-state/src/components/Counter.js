import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h3>Hitung Counter : {this.state.counter}</h3>
        <br />
        <button className="btn btn-success" onClick={this.increment}>
          +
        </button>
        <button className="btn btn-danger" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
