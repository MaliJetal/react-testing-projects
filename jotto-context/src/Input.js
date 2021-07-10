import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Input extends Component {
  render() {
    return (
      <div className="InputComponent">
        <div className="container">
          Input File
          <h1>Hey It Works</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Input);
