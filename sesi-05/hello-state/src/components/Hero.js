import React from "react";

class HeroName extends React.Component {
  render() {
    return (
      <>
        <h3 className="mt-4">Hero Name</h3>
        <p>{this.props.name}</p>
        <hr />
      </>
    );
  }
}

export default class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Thanos",
    };
  }
  render() {
    return <HeroName name={this.state.name} />;
  }
}
