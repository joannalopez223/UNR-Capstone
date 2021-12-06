import React, { Component } from "react";
import styles from './SimpleTextArea.module.css'

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
      <div className={styles.simple_text_area}>
        <input className={styles.text_area} type="textarea" 
          name="textValue"
          onChange={this.handleChange}
        />
      </div>
    );
  }
} 

export default SimpleTextArea;