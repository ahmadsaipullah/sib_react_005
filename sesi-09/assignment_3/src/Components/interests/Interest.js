import React, { Component } from "react";
import classes from "./Interest.module.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="about">
        <div className={classes.header}>
          <h1>Interest</h1>
          <hr />
        </div>
        <div className={classes.text}>
          <h3>Frontend Developer</h3>
          <p>
            iure dolore, velit hic delectus ex laborum quae ab deleniti
            veritatis, alias aspernatur nulla commodi in cumque nostrum quas
            recusandae illum omnis enim. Totam nobis vel asperiores repudiandae
            inventore iste omnis. Esse blanditiis sapiente architecto deserunt
            rerum, odio vero a officiis, et aperiam nam aut eligendi! Illum,
            enim ducimus laudantium facilis dignissimos quibusdam reprehenderit
            sint blanditiis corporis modi quae mollitia, consequatur omnis,
            voluptate eum eveniet natus asperiores amet inventore cupiditate
            doloremque autem non at! Doloremque repudiandae odio molestiae neque
          </p>
          <h3>Backend Developer</h3>
          <p>
            iure dolore, velit hic delectus ex laborum quae ab deleniti
            veritatis, alias aspernatur nulla commodi in cumque nostrum quas
            recusandae illum omnis enim. Totam nobis vel asperiores repudiandae
            inventore iste omnis. Esse blanditiis sapiente architecto deserunt
            rerum, odio vero a officiis, et aperiam nam aut eligendi! Illum,
            enim ducimus laudantium facilis dignissimos quibusdam reprehenderit
            sint blanditiis corporis modi quae mollitia, consequatur omnis,
            voluptate eum eveniet natus asperiores amet inventore cupiditate
            doloremque autem non at! Doloremque repudiandae odio molestiae neque
          </p>
        </div>
      </div>
    );
  }
}

export default Interest;
