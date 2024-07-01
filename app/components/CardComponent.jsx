"use client"
import React, { useContext } from 'react';
import { Card, CardHeader, CardBody, Divider, Textarea } from '@nextui-org/react';
import SelectSplit from './SelectSplit';
import { SplitProvider, SplitContext } from './SplitContext';
import BarChart from './BarChart';
import LoadingButton from './LoadingButton';

function CardContent() {
  const { selectedSplit, showComparisonCards, setShowComparisonCards } = useContext(SplitContext);

  const handleButtonClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setShowComparisonCards(true);
        resolve();
      }, 3000); // Simulate a 3-second process
    });
  };

  return (
    <>
      <Card className="w-2/5 z-0">
        <CardHeader className="flex justify-center items-center">
          <div className="text-center">
            <p className="text-xl">Customize Training</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <p>Select train/test split: </p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <SelectSplit />
            </div>
          </div>
          {selectedSplit && (
            <div className="flex flex-wrap p-4">
              <Textarea placeholder="Enter details..." className="w-full" />
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
    <SplitProvider>
      <CardContent />
    </SplitProvider>
  );
}