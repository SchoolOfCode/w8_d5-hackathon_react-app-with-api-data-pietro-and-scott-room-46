import React, { useState } from "react";
import "./App.css";
import Card from "../Card";

function App() {
  const [id, setId] = useState(1);

  function handleClick() {
    let chosenId = Math.floor(Math.random({ id }) * 731);
    setId(chosenId);
  }

  return (
    <div className="App">
      <h1>Superhero API</h1>
      <button onClick={handleClick}>Random Superhero!</button>
      <Card id={id} />
    </div>
  );
}

export default App;
