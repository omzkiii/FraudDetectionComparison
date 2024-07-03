import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";


export default function CardButtonDetect({handleDetect}) {
  return (
    <div onClick={handleDetect} style={{cursor: "pointer"}}>
    <Card shadow="md" className="py-4 hover:shadow-lg hover:scale-105 hover:bg-gray-100 transition-all duration-300">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h1 className="font-bold text-large">Detect fraud message</h1>
        <small className="text-default-500">Detect if the message you receive is real</small>  
      </CardHeader>
      <CardBody className="overflow-visible py-4">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://i.pinimg.com/564x/dc/ab/72/dcab7214c0d0cad68e7b0669cc92704c.jpg"
          width={270}
        />
      </CardBody>
    </Card>
    </div>
  );
}