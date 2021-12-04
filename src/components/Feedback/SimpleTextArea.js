import React, { Component } from "react";

class SimpleTextArea extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  handleChange(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <div>
        <input type="textarea" 
          name="textValue"
          onChange={this.handleChange}
        />
      </div>
    );
  }
} 

export default SimpleTextArea;