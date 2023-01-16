import React from 'react';
import '../sass/Card.scss';

const Card = () => {
  return (
    <div className='Card'>
        <p className='Card__name'>David</p>
        <div className='Card__circle'></div>
        <img className='Card__img' src="" alt="pokemon img" />
    </div>
  )
}

export default Card