import React from "react";
import ap from "autonomia-api";
import Vehicle from "./Vehicle";

const autonomia = ap({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Devices extends React.Component {
  state = {
    vehicles: []
  };

  componentDidMount() {
    // get list of vehicles in the application
    autonomia.vehicles.list()
    .then (data => {
      console.log("vehicles", data);
      this.setState({ vehicles: data });

      // testing vehicle get
      autonomia.vehicles.get(this.state.vehicles[0].serial)
        .then (d => {
          console.log("device", d);
          console.log("category", d.category, d.category.name);
          // testing videos get
          let end_date = new Date().toISOString();  // now in UTC timezone and ISO format
          let start_date = end_date.split('T')[0] + "T00:00:00.000Z";   // midnight of today UTC and ISO
          autonomia.vehicles.videos(this.state.vehicles[0].serial, 1, start_date, end_date)
            .then(v => {
              console.log("videos", v);
            })
        })
      // -- end testing
        
    })
  }

  render() {
    return (
      <div className="search">
        {this.state.vehicles.map(vehicle => {
          return (
            <Vehicle 
              key={vehicle._id}
              id={vehicle._id}
              serial={vehicle.serial}
              category={vehicle.category === null ? "N/A" : vehicle.category.name} 
              camera={vehicle.cameras[0]}
            />
          );
        })}
      </div>
    );
  }
}

export default Devices;
