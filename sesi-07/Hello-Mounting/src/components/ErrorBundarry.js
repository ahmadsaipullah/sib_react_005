import React from "react";

class ErrorBundarry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: true };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-undef
    logComponentStackToMyService(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div>
            <h1>Someting when wrong</h1>
            <span>Back to Home</span>
          </div>
        </>
      );
    }

    //view components
    return this.props.cildren;
  }
}

export default ErrorBundarry;
