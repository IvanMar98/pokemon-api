import React, { useState, useEffect} from 'react';
import './App.css';

function App() {

  const [pokemonNumber, setpokemonNumber] = useState(1);

  const contadorIncremental = ()=>{
    setpokemonNumber(pokemonNumber + 1);
    console.log("Valor antes del nuevo render: ", pokemonNumber);
  };
  const [pokemonName, setPokemonName] = useState("");

  useEffect(()=>{
    console.log("Valor al actualizar el estado: ", pokemonNumber);
    //Aqui debemos llamar a la api
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
    .then(result =>result.json())
    .then(data => setPokemonName(data.name));

  }, [pokemonNumber]);

  /* const contadorDecremental = ()=>{
    setCounter(count -1);
  } */

  return (
    <div className='App'>
      <button onClick={contadorIncremental}>Next</button>
      <div className='Counter'>
        {pokemonNumber} - {pokemonName}
      </div>
    </div>
  );
}

export default App
