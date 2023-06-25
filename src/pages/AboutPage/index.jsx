import React, { Component, Fragment } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

class AboutPage extends Component {
  constructor() {
    super();

    // Create an object with your information
    this.info = {
      name: "simaa",
      age: 24,
      occupation: "Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    };
  }

  render() {
    return (
      <Fragment>
        <Header />

        <div>
          <h1>About Me</h1>
          <p>Name: {this.info.name}</p>
          <p>Age: {this.info.age}</p>
          <p>Occupation: {this.info.occupation}</p>
          <p>Description: {this.info.description}</p>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default AboutPage;
