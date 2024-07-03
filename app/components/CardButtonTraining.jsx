import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function CardButtonTraining({handleTrain}) {
  return (
    <div onClick={handleTrain} style={{ cursor: "pointer" }}>
  <Card shadow="md" className="py-4 hover:shadow-lg hover:scale-105 hover:bg-gray-100 transition-all duration-300">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <h1 className="font-bold text-large">Train the model</h1>
      <small className="text-default-500">Train the model with your own dataset</small>
    </CardHeader>
    <CardBody className="overflow-visible py-4">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://i.pinimg.com/564x/f9/9a/83/f99a837bf71de7c1615abdd3ce2e43ff.jpg"
        width={270}
      />
    </CardBody>
  </Card>
</div>
  );
}