import React, { useState, useEffect } from "react";

function Card({ id }) {
  const [heroName, setheroName] = useState("");
  const [cardImage, setcardImage] = useState("");
  const [statsState, setstatsState] = useState("");

  useEffect(() => {
    FetchSuperHero();
  });
  async function FetchSuperHero() {
    const response = await fetch(
      `https://akabab.github.io/superhero-api/api/id/${id}.json`
    );
    const data = await response.json();

    let superheroName = data.name;
    let superheroImage = data.images.md;
    let supeheroStats = data.powerstats;

    setheroName(superheroName);
    setcardImage(superheroImage);
    setstatsState(supeheroStats);
  }
  return (
    <div>
      <p>{heroName}</p>
      <img src={cardImage} />
      <p>
        {Object.keys(statsState)[0]} : {statsState.intelligence}
      </p>
      <p>
        {Object.keys(statsState)[1]} : {statsState.strength}
      </p>
      <p>
        {Object.keys(statsState)[2]} : {statsState.speed}
      </p>
      <p>
        {Object.keys(statsState)[3]} : {statsState.durability}
      </p>
      <p>
        {Object.keys(statsState)[4]} : {statsState.power}
      </p>
      <p>
        {Object.keys(statsState)[5]} : {statsState.combat}
      </p>
    </div>
  );
}
export default Card;
