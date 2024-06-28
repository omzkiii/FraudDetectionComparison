"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Head from 'next/head'
import CardButtonDetect from './components/CardButtonDetect';
import CardButtonTraining
 from './components/CardButtonTraining';
export default function Home() {
  const router = useRouter();

  const handleTrain = (event) => {
    event.preventDefault();
    router.push('/train');
  }

  const handleDetect = async (event) => {
    event.preventDefault();
    router.push('/detect');
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-8">Welcome to Next.js Landing Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CardButtonTraining  handleTrain={handleTrain}/>
        <CardButtonDetect handleDetect={handleDetect} />
      </div>
    </div>
    </div>
  )
}
