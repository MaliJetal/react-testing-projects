import React from "react";

//import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

function App() {
  const props = {
    success: false,
    guessedWords: [
      {
        guessedWord: "train",
        letterMatchCount: 3,
      },
    ],
  };
  return (
    <div className="App" data-test="component-app">
      App Works!!
      <Congrats {...props} />
      <GuessedWords {...props} />
    </div>
  );
}

export default App;
