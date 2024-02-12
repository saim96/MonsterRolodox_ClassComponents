import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        type="search"
        placeholder= {this.props.placeholder}
        onChange={this.props.onSearchChangeHandler} // now it NOT going to re-initialize the anonymous function again & again eveytime render gets called.
      />
    );
  }
}

export default SearchBox;
