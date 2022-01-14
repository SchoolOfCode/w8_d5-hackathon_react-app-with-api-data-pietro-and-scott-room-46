import React from 'react'

function Card({ heroName, cardImage, statsState }) {
    return (
      <div>
        <p>Super hero card</p>
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