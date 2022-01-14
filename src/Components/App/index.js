import React from "react";
import './App.css';
import Superhero from "../SuperHeroViewer";
import Card from "../Card";

function App() {
  return (
    <div className="App">
      <h1>Superhero API</h1>
      <Superhero />
      <Card />
    </div>
  );
}

export default App;
