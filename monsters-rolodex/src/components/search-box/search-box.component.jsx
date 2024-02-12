import { Component } from "react";
/* This component is model that should be generic. 
so if there are one or more search feild which are not related to "searching monsters" 
this can search box component can be used */
class SearchBox extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        type="search"
        placeholder= {this.props.placeholder}
        onChange={this.props.onChangeHandler} // now it NOT going to re-initialize the anonymous function again & again eveytime render gets called.
      />
    );
  }
}

export default SearchBox;
