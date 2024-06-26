"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import Landing from './pages/landing'

export default function Home() {
  const  [textData, setTextData] = useState('');
  const router = useRouter();

  const handleTrain = (event) => {
    event.preventDefault();
    router.push('/training');
    alert(textData)
  }

  const handleDetect = (event) => {
    event.preventDefault();
    router.push('/detect');
    alert(textData)
  }

  
  return (
    <main className="flex justify-center items-center">
      <Landing handleTrain = {handleTrain} setTextData = {setTextData} handleDetect= {handleDetect}></Landing>
    </main>
  );
}
