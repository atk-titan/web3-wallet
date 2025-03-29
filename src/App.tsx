import { useEffect, useState } from 'react';
import './App.css';
import { generateMnemonic } from 'bip39';
import Button from './components/Button';
import SeedPhrase from './components/SeedPhrase';
import SolanaWallet from './components/SolanaWallet';

function App() {
  const [seedPhrase, setSeedPhrase] = useState<string | null>(null);
  const [hasSeed, setHasSeed] = useState(false);
  const [showSeed , setShowSeed] = useState(false);

  const generateSeedPhrase = () => {
    console.log('Generating Seed Phrase...');
    const mnemonic = generateMnemonic();
    console.log("generated");
    setSeedPhrase(mnemonic);
    setHasSeed(true);
  };

  return (
    <div className="bg-gray-950 h-screen text-gray-100 grid grid-cols-6 place-items-center">
      <div className="col-span-2 col-end-5 flex flex-col items-center border-2">
        <h1 className="text-5xl pb-8">Web3 Wallet</h1>
        <div className="space-x-4">
          <Button 
            name="Generate Seed Phrase"
            onClick={!hasSeed ? generateSeedPhrase : () => console.log(seedPhrase)}
          />
          <Button 
            name="Show Seed Phrase"
            onClick={() => setShowSeed(!showSeed)}
          />
        </div>
        {showSeed && seedPhrase && <SeedPhrase seed={seedPhrase} />}
        <SolanaWallet/>
      </div>
    </div>
  );
}

export default App;