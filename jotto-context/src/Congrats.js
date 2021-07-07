import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const Congrats = (props) => {
  if (props.success == true) {
    return (
      <div data-test="component-congrats" className="component-congrats">
        <span data-test="message-congrats">
          Congrats! You have guessed right word.
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats" className="component-congrats"></div>
    );
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
