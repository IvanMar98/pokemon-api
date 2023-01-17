import React, { useState, useEffect} from 'react';
import Button from './components/Button';
import './sass/App.scss';
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import Card from './components/Card';


function App() {

  /* Estado para el numero del pokemon */
  const [pokemonNumber, setpokemonNumber] = useState(60);
  /* Estado para el nombre del pokemon */
  const [pokemonEvolutions, setPokemonEvolutions] = useState([])
  /* Funcion para regresar al pokemon */
  function backPkemon(){
    pokemonNumber === 1 ? setpokemonNumber(1) : setpokemonNumber(pokemonNumber - 1)
  }
  /* Funcion para avanzar al pokemon */
  function nextPokemon(){
    setpokemonNumber(pokemonNumber + 1);
  }

  /* useEffect(()=>{
    console.log(pokemonNumber);
    //Aqui debemos llamar a la api
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
    .then(result =>result.json())
    .then(data => setPokemonName(data.name));

  }, [pokemonNumber]);
 */

  useEffect(()=>{
    getEvolutions(pokemonNumber);
  }, [pokemonNumber]);

  /* Funcion asincrina que nos devuelve la cadena de evolucion del pokemon */
  async function getEvolutions(id){
    const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
    const data = await response.json();

    let pokemonEvolutionsArray = [];

    let pokemonEvolution1 = data.chain.species.name; //Nombre de la primera evolucion
    let pokemonEvolution1Img = await getPokemonImagen(pokemonEvolution1);/* pasamos el nombre del pokemon a la funcion para buscar la imagen por el nombre */

    pokemonEvolutionsArray.push([pokemonEvolution1, pokemonEvolution1Img]);

    if(data.chain.evolves_to.lenght !== 0){
      let pokemonEvolution2 = data.chain.evolves_to[0].species.name;
      let pokemonEvolution2Img = await getPokemonImagen(pokemonEvolution2);
      pokemonEvolutionsArray.push([pokemonEvolution2, pokemonEvolution2Img]);

      if(data.chain.evolves_to[0].evolves_to.lenght !== 0){
        let pokemonEvolution3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let pokemonEvolution3Img = await getPokemonImagen(pokemonEvolution3);
        pokemonEvolutionsArray.push([pokemonEvolution3, pokemonEvolution3Img]);
      }
    }
    setPokemonEvolutions(pokemonEvolutionsArray);
  }

  /* Funcion asincrina que nos devuleve la imagen con el nombre del pokemon */
  async function getPokemonImagen(name){
    const response = await fetch(` https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await response.json();
    return data.sprites.other['official-artwork'].front_default;
  }

  return (
    <div className='App'>
      <div className='Cards__container'>
        {pokemonEvolutions.map(pokemon =>
          <Card
          key = {pokemon[0]}
          name = {pokemon[0]}
          img = {pokemon[1]}/>
        )}
        
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
    </div>
  );
}

export default App
