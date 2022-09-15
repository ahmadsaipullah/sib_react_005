import React, { logComponentStackToMyservice } from "react";

class ErrorBundarry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: true };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logComponentStackToMyservice(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          <h1>Back to Home.</h1>
        </>
      );
    }
    //view component
    return this.props.children;
  }
}

export default ErrorBundarry;
