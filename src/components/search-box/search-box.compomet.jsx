import { Component } from "react";

class SerachBox extends Component {
  render() {
    return (
      <input
        // className="search-box"
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SerachBox;
