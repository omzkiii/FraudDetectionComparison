"use client";
import React, { useState, useContext } from 'react'
import { BackendContext } from '../context/BackendContext';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";




export default function CardDetect() {
  const [inputText, setInputText] = useState("")
  const { setShowDetectResult, setDetectRes } = useContext(BackendContext);
  const [waitingForBackend, setWaitingForBackend] = useState(false)

  
  const handleClick = async (event) => {
    console.log(inputText)
    setWaitingForBackend(true)
    setShowDetectResult(false)
    const reqBody = {
      text: inputText,
    }

    const response = await fetch('http://localhost:5000/detect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    });

    setWaitingForBackend(false)
    const data = await response.json()

    setDetectRes(data)
    setShowDetectResult(true)

  
  }

  return (
    <Card className="w-[800px] z-0" >
      <CardHeader className="flex justify-center items-center">
        <div className="text-center">
          <p className="text-xl">Submit Text for Checking</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <div className="flex flex-wrap items-center">
          <Textarea value={inputText} label="Paste the message here" className="w-full" onValueChange={setInputText}/>
            
          </div>
          <div></div>
        <div className="flex flex-wrap justify-center mt-4">
          {waitingForBackend ? 
          (<Button onClick={handleClick} disabled={true} isLoading radius="xs" className=" bg-cyan-950 text-white shadow-lg" size="md" >Processing</Button>)
          : (<Button onClick={handleClick} disabled={!inputText} radius="xs" className=" bg-cyan-950 text-white shadow-lg" size="md" >Submit Text</Button>)
          
          }
          
          


        </div>

      </CardBody>
      
    </Card>

    

  );
}
