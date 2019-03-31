import React from "react";
import ap from "autonomia-api";

const autonomia = ap({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Devices extends React.Component {
  state = {
    vehicles: []
  };

  componentDidMount() {
    autonomia.vehicles
      .list()
      .then (data => {
        console.log(data);
        this.setState({ vehicles: data });
      })
  }

  render() {
    return <div>VEHICLES</div>
  }
}

export default Devices;
