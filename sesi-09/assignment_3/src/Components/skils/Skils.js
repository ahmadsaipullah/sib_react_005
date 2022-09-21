import React, { Component } from "react";
import classes from "./Skils.module.css";

class Skils extends Component {
  render() {
    return (
      <div className={classes.box}>
        <div className={classes.header}>
          <h1>Skils</h1>
          <hr />
        </div>
        <div className={classes.text}>
          <h4>HTML</h4>
          <p>
            temporibus eaque id quos fugiat ea! Quibusdam dolorum ut debitis!
            reprehenderit facere nesciunt rem quis iure dolore
          </p>
          <h4>CSS</h4>
          <p>
            temporibus eaque id quos fugiat ea! Quibusdam dolorum ut debitis!
            reprehenderit facere nesciunt rem quis iure dolore
          </p>
          <h4>JAVASCRIPT</h4>
          <p>
            temporibus eaque id quos fugiat ea! Quibusdam dolorum ut debitis!
            reprehenderit facere nesciunt rem quis iure dolore
          </p>
          <h4>BOOTSTRAP</h4>
          <p>
            temporibus eaque id quos fugiat ea! Quibusdam dolorum ut debitis!
            reprehenderit facere nesciunt rem quis iure dolore
          </p>
          <h4>LARAVEL</h4>
          <p>
            temporibus eaque id quos fugiat ea! Quibusdam dolorum ut debitis!
            reprehenderit facere nesciunt rem quis iure dolore
          </p>
        </div>
      </div>
    );
  }
}

export default Skils;
