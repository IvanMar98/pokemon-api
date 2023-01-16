import React, { useState, useEffect} from 'react';
import Button from './components/Button';
import './App.css';
import './sass/App.scss';
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import Card from './components/Card';


function App() {

  /* Estado para el numero del pokemon */
  const [pokemonNumber, setpokemonNumber] = useState(1);
  /* Estado para el nombre del pokemon */
  const [pokemonName, setPokemonName] = useState("");

  /* Funcion para regresar al pokemon */
  function backPkemon(){
    pokemonNumber === 1 ? setpokemonNumber(1) : setpokemonNumber(pokemonNumber - 1)
  }
  /* Funcion para avanzar al pokemon */
  function nextPokemon(){
    setpokemonNumber(pokemonNumber + 1);
  }

  useEffect(()=>{
    console.log("Valor al actualizar el estado: ", pokemonNumber);
    //Aqui debemos llamar a la api
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
    .then(result =>result.json())
    .then(data => setPokemonName(data.name));

  }, [pokemonNumber]);

  return (
    <div className='App'>
      <div className='Cards__container'>
        <Card />
      </div>
      <div className='Buttons__container'>
        <Button 
          icon = {<TiArrowLeftOutline />}
          handleClick ={backPkemon} 
        />
        <Button 
          icon = {<TiArrowRightOutline />} 
          handleClick ={nextPokemon} 
        />
      </div>
      <div className='Counter'>
        {pokemonNumber} - {pokemonName}
      </div>
    </div>
  );
}

export default App
