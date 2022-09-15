import React from "react";
import { Container } from "react-bootstrap";

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      username:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam ducimus amet cumque fugiat harum iste dolor ullam consequuntur porro quisquam aliquid, vitae corporis, ad, commodi iusto accusamus repudiandae. Necessitatibus laborum veritatis harum! Accusamus, necessitatibus eaque corrupti nam est saepe, dolorum qui eveniet voluptatem porro rem officiis blanditiis atque dolor?",
    };
  }

  render() {
    return (
      <Container>
        <p className="user">{this.state.username}</p>
      </Container>
    );
  }
}
