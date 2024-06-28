'use client';
import React, { useState } from 'react'

function Training() {
    return (
      <div>
        HELLO WORLD!
        <form onSubmit={handleSubmit} className="p-6 rounded shadow-md">
          <h1> SMS Fraud Detection </h1>
          <textarea className="focus:outline-none focus:ring-2 focus:ring-indigo-600">
          </textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
  
  export default Training
