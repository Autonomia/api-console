import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Devices from "./Devices";
import Details from "./Details";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Autonomia API Console</Link>
        </header>
        <Router>
          <Devices path="/" />
          <Details path="/details/:serial" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
