import React from 'react';

const SeedPhrase = (props) => {
  return (
    <div className='flex p-5'>
      {props.seed.split(' ').map((word, index) => (
        <h2 key={index} className="px-2">{word}</h2>
      ))}
    </div>
  );
};

export default SeedPhrase;