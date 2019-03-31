import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Devices from "./Devices";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Autonomia API Console</Link>
        </header>
        <Router>
          <Devices path="/" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
