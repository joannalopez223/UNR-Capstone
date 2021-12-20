import React, { Component } from "react";
import styles from "./DropDown.module.css";

class DropDown extends Component {
  //On the change event for the select box pass the selected value back to the parent
  handleChange = event => {
    let selectedValue = event.target.value;
    this.props.onSelectChange(selectedValue);
  };

  render() {
    let arrayOfData = this.props.arrayOfData;
    let options = arrayOfData.map(data => (
      <option key={data.id} value={data.id}>
        {data.name}
      </option>
    ));

    return (
      <select
        name="customSearch"
        className={styles.custom_search_select}
        onChange={this.handleChange}
      >
        <option>Which request?</option>
        {options}
      </select>
    );
  }
}

export default DropDown;
