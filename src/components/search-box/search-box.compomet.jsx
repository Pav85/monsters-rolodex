import { Component } from "react";

class SerachBox extends Component {
  render() {
    return (
      <input
        className="search-box"
        type="search"
        placeholder="search monsters"
        onChange={onSearchChange}
      />
    );
  }
}

export default SerachBox;
