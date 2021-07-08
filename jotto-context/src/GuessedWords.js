import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">TRy to guess secret world!</span>
    );
  }
  return <div data-test="component-guessedWords">{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
