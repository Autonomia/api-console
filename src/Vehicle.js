import React from "react";
import { Link } from "@reach/router";

class Vehicle extends React.Component {
  render() {
    const { serial, category, camera, id } = this.props;
    let hero = camera.urlImage;

    return (
      <Link to={`/details/${serial}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{serial}</h1>
          <h2>{`${category} — ${camera.name} — ${camera.streaming}`}</h2>
        </div>
      </Link>
    );
  }
}

export default Vehicle;
