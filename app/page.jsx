"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import Landing from './pages/landing'

export default function Home() {
  const  [textData, setTextData] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push('/result');
    alert(textData)
  }
  
  return (
    <main className="flex justify-center items-center">
      <Landing handleSubmit = {handleSubmit} setTextData = {setTextData}></Landing>
    </main>
  );
}
