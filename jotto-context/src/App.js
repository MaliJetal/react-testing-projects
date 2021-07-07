import React from "react";

//import "./App.css";
import Congrats from "./Congrats";

function App() {
  const props = {
    success: false,
  };
  return (
    <div className="App" data-test="component-app">
      App Works!!
      <Congrats {...props} />
    </div>
  );
}

export default App;
