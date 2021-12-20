import React from "react";
import { Component } from "react";
import styles from "./Search.module.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      request: " "
    };
  }

  handleRequestChange = event => {
    this.setState({ request: event.target.value });
  };

  render() {
    return (
      <form>
        <div>
          <input
            type="text"
            value={this.state.request}
            onChange={this.handleRequestChange}
          />
        </div>
      </form>
    );
  }
}

export default Search;
