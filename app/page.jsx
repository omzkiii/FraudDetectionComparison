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

  const handleDetect = async (event) => {
    event.preventDefault();
    router.push('/detect');
    alert(textData)
    const response = await fetch('http://localhost:5000/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: textData.toString() }),
    });
    console.log(JSON.stringify(textData));
    const data = await response.json();   
    setTextData(data);
    console.log("RESPONSE: " + data['processed']);
    alert(data['processed']);
    setTextData(textData);
  }


  return (
    <main className="flex justify-center items-center">
      <Landing handleTrain = {handleTrain} setTextData = {setTextData} data = {textData} handleDetect= {handleDetect}></Landing>
    </main>
  );
}
