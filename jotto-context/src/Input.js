import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          id="word-guess"
          placeholder="Entier Word"
        />
        <button
          type="submit"
          data-test="submit-button"
          className="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    );
    return (
      <div data-test="component-input" className="InputComponent">
        <div className="container">{contents}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
