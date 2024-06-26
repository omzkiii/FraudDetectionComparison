"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import Landing from './pages/landing'

export default function Home() {
  const  [textData, setTextData] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      <Landing handleSubmit = {handleSubmit} setTextData = {setTextData} data = {textData}></Landing>
    </main>
  );
}
