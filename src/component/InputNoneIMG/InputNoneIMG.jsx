import React, { Component } from "react";
import "./InputNoneIMG.css";
import { BiUserCircle } from "react-icons/bi";
import { IconContext } from "react-icons";

class TextInput extends Component {
  render() {
    return (
      <div className="container__noneimg"> 
        <input
          className="container__input"
          type={this.props.input}
          placeholder={this.props.name}
        />
      </div>
    );
  }
}

export default TextInput;
