import React from "react";
import { navigate } from "@reach/router";
import ap from "autonomia-api";
import Vehicle from "./Vehicle";
//import Carousel from "./Carousel";

const autonomia = ap({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Details extends React.Component {
  state = { loading: true };
  componentDidMount() {
    autonomia.vehicles
      .get(this.props.serial)
      .then(data => {
        this.setState({
          vehicle: data,
          loading: false
        });
      })
      .catch(() => {
        navigate("/");
      });
  }
  render() {
    if (this.state.loading) {
      return <h1>loading … </h1>;
    }

    const { serial, cameras, category } = this.state.vehicle;

    return (
      <div className="details">
        
        <div>
          <h1>{serial}</h1>
          <div className="image-container">
            <img src={cameras[0].urlImage} alt={serial} />
          </div>
          <h2>{`${category.name} — ${cameras[0].name} — ${cameras[0].streaming}`}</h2>
          <p>FILLER</p>
        </div>
      </div>
    );
  }
}

export default Details;
