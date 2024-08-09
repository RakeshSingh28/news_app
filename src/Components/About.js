import React, { Component } from "react";

let pageTitle = document.title;
export class About extends Component {
  componentDidMount() {
    document.title = `About | ${pageTitle}`;
  }
  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center"></div>
    );
  }
}

export default About;
