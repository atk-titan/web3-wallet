import React from 'react';

const Button = (props) => {
  return (
      <button 
        className='border-2 p-2 rounded-lg m-4'
        onClick={props.onClick}>
          {props.name}
      </button>
  );
}

export default Button;