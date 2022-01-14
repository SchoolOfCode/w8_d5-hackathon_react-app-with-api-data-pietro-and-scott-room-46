import React, {useState} from 'react';







function Superhero() {
    const [heroName, setheroName] = useState("")
    const [cardImage, setcardImage] = useState("")
    const [statsState, setstatsState] = useState({})

    async function fetchSuperHero(){
    let response = await fetch("https://akabab.github.io/superhero-api/api/all.json");
    let data = await response.json();

    let superheroName= data[0].name;
    let superheroImage= data[0].images.md;
    let supeheroStats = data[0].powerstats;
        
    setheroName(superheroName);
    setcardImage(superheroImage);
    setstatsState(supeheroStats);
    console.log(heroName)

}


fetchSuperHero();
    return (
        <div>
            <p>{heroName}</p>
            <img src={cardImage} />
            <ul>
                {console.log(statsState)
                }
                
            </ul>
        </div>
    )
}

export default Superhero
