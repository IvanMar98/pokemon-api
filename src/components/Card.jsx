import React from 'react';
import '../sass/Card.scss';

const Card = (props) => {
  return (
    <div className='Card'>
        <p className='Card__name'>{props.name}</p>
        <div className='Card__circle'></div>
        <img className='Card__img' src= {props.img} alt="pokemon img" />
    </div>
  )
}

export default Card