"use client"
import { useContext } from 'react';
import { Card, CardHeader, CardBody, Divider, Button, Textarea } from '@nextui-org/react';
import SelectSplit from './SelectSplit';
import { SplitProvider, SplitContext } from './SplitContext';

function CardContent() {
  const { selectedSplit } = useContext(SplitContext);

  return (
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
          <Button radius="full" className=" bg-cyan-950 text-white shadow-lg" size="lg">
            Train and Compare
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default function CardComponent() {
  return (
    <SplitProvider>
      <CardContent />
    </SplitProvider>
  );
}