import React, {useReducer, useState,useEffect} from 'react';
import './App.css';
import Superhero from "../SuperHeroViewer";
import Card from "../Card";



function App() {

  const [heroName, setheroName] = useState("")
    const [cardImage, setcardImage] = useState("")
     const [statsState, setstatsState] = useState("")
     const [array, setarray] = useState([])

  async function fetchSuperHero(){

    




let response = await fetch("https://akabab.github.io/superhero-api/api/all.json");
let data = await response.json();

let superheroName= data[0].name;
let superheroImage= data[0].images.md;
 
    for(let i=0; i<data.length; i++){
             console.log(data[i].images.md)  
    }

setarray(data);
setheroName(superheroName);
setcardImage(superheroImage);




console.log(statsState)



}


 useEffect(() => {
 fetchSuperHero();
},[])


  return (
    <div className="App">
      <h1>Superhero API</h1>
      <p>{heroName}</p>
      <a href=""><img src={cardImage} /></a>
      <Superhero />
      <Card heroName={heroName} cardImage={cardImage} statsState={statsState} />
    </div>
  );
}

export default App;
