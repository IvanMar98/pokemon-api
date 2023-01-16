import React from 'react';
import '../sass/Button.scss';

const Button = (props) => {
  return (
    <div className='Btn__box'>
      <button className='Btn'
        onClick={props.handleClick}>{props.icon}</button>
      <div className=' Btn__shadow'></div>
    </div>
  )
}

export default Button