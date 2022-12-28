import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  render() {
    return (
      <center>
        <button className="mainbutton" type="submit">
          {this.props.children}
        </button>
      </center>
    );
  }
}
