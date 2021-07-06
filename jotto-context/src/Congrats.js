import React from "react";

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

export default Congrats;
