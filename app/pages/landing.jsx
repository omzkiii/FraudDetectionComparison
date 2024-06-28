import React from 'react'
import { useRouter } from 'next/navigation';
import Head from 'next/head'

function Landing() {
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
          <button onClick={handleTrain} className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg text-center shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold mb-2">Train and Compare</h2>
            <p className="text-lg">Click here to train and compare</p>
          </button>

          <button onClick={handleDetect} className="bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg text-center shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold mb-2">Detect Fraud</h2>
            <p className="text-lg">Click here to detect fraud</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landing
