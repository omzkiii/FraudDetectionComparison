"use client"
import React, { useContext, useState } from 'react';
import { Card, CardHeader, CardBody, Divider, Textarea } from '@nextui-org/react';
import SelectSplit from './SelectSplit';
import { SplitProvider, SplitContext } from '../context/SplitContext';
import { BackendProvider } from '../context/BackendContext';
import BarChart from './BarChart';
import LoadingButton from './LoadingButton';
import {Input} from "@nextui-org/react";

function CardContent() {
  const { selectedSplit, showComparisonCards } = useContext(SplitContext);
  const [randomState, setRandomState] = useState(100);

  const handleButtonClick = async () => {

    const reqBody = {
      split: selectedSplit,
      state: randomState,
    }

    const response = await fetch('http://localhost:5000/train', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    });

    return response
  };


  const handleRandomStateChange = (e) => {
    const value = parseInt(e.target.value)
    console.log(value)
    setRandomState(value)
  }


  return (
    <>
      <Card className="w-[800px] z-0">
        <CardHeader className="flex justify-center items-center">
          <div className="text-center">
            <p className="text-xl">Customize Training</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <p>Select test size: </p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <SelectSplit />
            </div>
          </div>
          {selectedSplit && (
            <div className="flex flex-wrap p-4">
              <p className='w-1/2'> Random State </p>
              <Input value={randomState} type="number" variant="flat" label="Random State" className='w-1/2' onChange={handleRandomStateChange}/>
            </div>
          )}
          <div className="flex flex-wrap justify-center">
            <LoadingButton onClick={handleButtonClick} className="bg-cyan-950 text-white shadow-lg" size="lg">
              Train and Compare
            </LoadingButton>
          </div>
        </CardBody>
      </Card>
      {showComparisonCards && (
        <div className="mt-4 flex justify-center">
          <Card className="w-[800px] h-full">
            <CardHeader className="flex justify-center">
              <p className="text-lg font-semibold">Model Training Results</p>
            </CardHeader>
            <CardBody className="flex flex-col items-center">
              <BarChart />
            </CardBody>
          </Card>
        </div>
      )}



    </>
  );
}

export default function CardComponent() {
  return (
    <BackendProvider>
    <SplitProvider>
      <CardContent />
    </SplitProvider>
    </BackendProvider>
  );
}