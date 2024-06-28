"use client"
import React, { useState } from 'react'

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
      <div>
        HELLO WORLD!
        <form onSubmit={handleSubmit} className="p-6 rounded shadow-md">
          <h1> SMS Fraud Detection </h1>
          <textarea className="focus:outline-none focus:ring-2 focus:ring-indigo-600"
            onChange={(e) => setTextData(e.target.value)}>
          </textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
  
  export default Testing
