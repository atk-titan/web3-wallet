import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='bg-gray-950 h-screen flex justify-center items-center'>
      <h1 className='text-gray-100 text-5xl h-fit '>Web3 Wallet</h1>
      
    </div>
  );
}

export default App;