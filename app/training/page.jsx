import React from 'react'

function Training({ handleSubmit, setTextData }) {
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
  
  export default Training