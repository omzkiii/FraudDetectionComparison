"use client";


import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import LoadingButton from "./LoadingButton";

export default function CardDetect() {
  return (
    <Card className="w-2/5 z-0" >
      <CardHeader className="flex justify-center items-center">
        <div className="text-center">
          <p className="text-xl">Detect Fraud</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 p-4">
                <Textarea label="Paste the message here" className="max-w-xs"/>
            </div>
            <div className="w-full md:w-1/2 p-4"> 
                <div className=" flex flex-col gap-4">
                    <Button radius="xs" className=" bg-cyan-950 text-white shadow-lg" size="md">Traditional ML</Button>
                    <Button radius="xs" className=" bg-cyan-950 text-white shadow-lg" size="md">Neural Network</Button>
                    <Button radius="xs" className=" bg-cyan-950 text-white shadow-lg" size="md">Rule-Based</Button>
                </div>
            </div>
          </div>
          <div></div>
        <div className="flex flex-wrap justify-center">
          <LoadingButton radius="full" className=" bg-cyan-950 text-white shadow-lg" size="lg">
            SUBMIT
          </LoadingButton>
        </div>

      </CardBody>
      
    </Card>
  );
}
