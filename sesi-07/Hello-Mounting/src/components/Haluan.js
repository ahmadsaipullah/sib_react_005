import React from "react";

class Haluan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      users: [],
      isLoading: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.users.length !== nextState.users) {
      return true;
    }

    return false;
  }

  componentDidUpdate(preProps) {
    if (preProps.selectedState !== this.props.selectedState) {
      //evenDate.addEventListener()
      fetch("https://jsonPlaceholder.typicode.com/todos/1")
        .then((resp) => resp.json())
        .then((respJson) => {
          this.setState({
            isLoading: false,
            users: respJson,
          });
        });
      // .catch((err) => console.log(err));
    }
  }

  render() {
    const postTodo = this.state;
    return (
      <>
        <table>
          <tr>
            <td>
              <p>{postTodo.id}</p>
            </td>
            <td>
              <p>{postTodo.title}</p>
            </td>
          </tr>
        </table>
      </>
    );
  }
}

export default Haluan;
