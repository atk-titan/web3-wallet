import React from 'react'
import { useState } from 'react'
import { mnemonicToSeed } from 'bip39'
import { derivePath } from 'ed25519-hd-key'
import nacl from "tweetnacl"
import Button from './Button'
import { Keypair } from '@solana/web3.js'

const SolanaWallet = ({mnemonic}) => {
    const [accountNo,setAccountNo] = useState(0);
    const [publicKeys,setPublicKeys] = useState([]);

    const accountCreation = async () => {
        const seed = await mnemonicToSeed(mnemonic);
        const path = `m/44'/501'/${accountNo}'/0'`;
        const derivedSeed = derivePath(path,seed.toString('hex')).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keyPair = Keypair.fromSecretKey(secret);
        setAccountNo(accountNo+1);
        setPublicKeys(publicKeys=>[...publicKeys,keyPair.publicKey]);
        console.log("account created");
    }

  return (
    <div className='w-full px-5'>
        <div className='flex justify-between items-center w-full'>
            <h1 className='text-2xl'>Solana Wallet</h1>
            <Button name="Add Account" onClick={accountCreation}></Button>
        </div>
        {publicKeys.map((address,index)=>{
            // console.log(address);
            return <h1 key={index} className='text-gray-200 p-1'>{address.toBase58()}</h1>
        })}
    </div>
  )
}

export default SolanaWallet