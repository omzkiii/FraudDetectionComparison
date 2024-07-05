"use client"
import { Card, CardHeader, CardBody, Divider, Textarea } from '@nextui-org/react';

export default function CardResult({result}) {

    return (
      <Card className="w-[800px] z-0 mt-4 ">
      <CardHeader className="flex justify-center items-center">
        <div className="text-center">
          <p className="text-xl">Result</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex justify-between items-center p-4 mt-4 rounded-lg border-1 p-4">
          <div className="flex flex-col items-center border-1 p-4">
            <p className="text-lg font-medium">Rule-Based Algorithm:</p>
            <p className={`text-lg font-medium ${result.rb == "spam" && "text-red-600"}`}>{result.rb.toUpperCase()}</p>
          </div>
          <Divider className="mx-4" orientation="vertical"/>
          <div className="flex flex-col items-center border-1 p-4">
            <p className="text-lg font-medium">Random Forest Algorithm:</p>
            <p className={`text-lg font-medium ${result.ml == "spam" && "text-red-600"}`}>{result.ml.toUpperCase()}</p>
          </div>
          <Divider className="mx-4" orientation="vertical" />
          <div className="flex flex-col items-center border-1 p-4">
            <p className="text-lg font-medium">Neural Networks:</p>
            <p className={`text-lg font-medium ${result.nn == "spam" && "text-red-600"}`}>{result.nn.toUpperCase()}</p>
          </div>
        </div>
      </CardBody>
    </Card>
    )
}

