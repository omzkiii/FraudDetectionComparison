"use client"
import React, { useState } from 'react'
import CardDetect from '../components/CardDetect'


function Testing() {
  const [textData, setTextData] = useState('');
  const handleSubmit = async (e) => {
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
  };
    return (
      <>
        <div className="min-h-screen bg-white flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-8">Fraud Detection</h1>
        <CardDetect />
        </div>
    </>
    )
  }
  
  export default Testing
