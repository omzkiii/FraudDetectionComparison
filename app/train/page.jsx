import React from 'react'
import CardComponent from '../components/CardComponent'
import CardAbout from '../components/CardAbout'


function train() {
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col justify-center items-center my-6">
        <div className="flex flex-col w-full p-4 justify-center items-center">
          <h1 className="text-5xl font-bold mb-8">TRAIN AND COMPARE</h1>
        </div>

        <div className="flex flex-row gap-10 justify-center items-center">
          <CardAbout className="flex-1"/>

          <div className="flex-1 flex flex-col justify-center items-center">
            <CardComponent /> 
          </div>

        </div>
      
      </div>
    </>
  )
}

export default train
