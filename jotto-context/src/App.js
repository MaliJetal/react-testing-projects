import React from "react";

//import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

function App() {
  const props = {
    success: true,
    guessedWords: [
      { guessedWord: "train", letterMatchCount: 3 },
      { guessedWord: "agile", letterMatchCount: 1 },
      { guessedWord: "party", letterMatchCount: 5 },
    ],
  };
  return (
    <div className="App" data-test="component-app">
      <div className="container">
        <h1>Jotto-Game</h1>
        <Congrats {...props} />
        <GuessedWords {...props} />
      </div>
    </div>
  );
}

export default App;
