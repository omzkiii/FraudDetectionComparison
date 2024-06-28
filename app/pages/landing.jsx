import React from 'react'
import Head from 'next/head'

function Landing({ handleTrain, setTextData, data, handleDetect }) {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-8">Welcome to Next.js Landing Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="#" onClick={handleTrain} className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg text-center shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold mb-2">Train and Compare</h2>
            <p className="text-lg">Click here to train and compare</p>
          </a>

          <a href="#" onClick={handleDetect} className="bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg text-center shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold mb-2">Detect Fraud</h2>
            <p className="text-lg">Click here to detect fraud</p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Landing
