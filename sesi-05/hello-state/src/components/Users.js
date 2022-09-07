import React from "react";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "User 001",
      password: "021021",
    };
  }

  //create function > return username
  getUsername() {
    return this.state.username;
  }
  getPassword() {
    return this.state.password;
  }

  //halaman 8 sesi 5
  //create function ? change buttom
  setUsername = () => {
    this.setState({
      username: "persija",
      password: "Jakarta",
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>Belajar State</h1>
          {/* state one get this.state */}
          <div className="row">
            <div className="col-sm">username : {this.state.username}</div>
            <div className="col-sm">password : {this.state.password}</div>
          </div>
          <hr />
          {/* step two return getUsername this.state */}
          <div className="row">
            <div className="col-sm">username : {this.getUsername()}</div>
            <div className="col-sm">password : {this.getPassword()}</div>
          </div>
          <hr />
          {/* step three set data baru state */}
          <div className="row">
            <div className="col-sm">
              lihat perubahan &gt; username : {this.state.username}
            </div>
            <div className="col-sm">
              lihat perubahan &gt; password password : {this.state.password}
            </div>
            <button onClick={this.setUsername}>Set username</button>
          </div>
        </div>
      </>
    );
  }
}

export default Users;
