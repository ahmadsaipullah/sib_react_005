import React, { Component } from "react";
import classes from "./Education.module.css";

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id="about">
        <div className={classes.header}>
          <h1>Education</h1>
          <hr />
        </div>
        <div className={classes.text}>
          <h3>SD</h3>
          <p>Sekolah dasar</p>
          <h3>SMP</h3>
          <p>Sekolah Menengah Pertama</p>
          <h3>SMK</h3>
          <p>Sekolah Menengah Kejuruan</p>
        </div>
      </div>
    );
  }
}

export default Education;
