"use client"
import { useContext } from 'react';
import { BackendProvider, BackendContext } from '../context/BackendContext';
import CardDetect from '../components/CardDetect'
import CardResult from '../components/CardResult';


function DetectContent() {
  const { showDetectResult, detectRes } = useContext(BackendContext);

    return (
      <>
        <div className="min-h-screen bg-white flex flex-col justify-center items-center">
          <div className="flex flex-col w-full p-4 justify-center items-center">
            <h1 className="text-5xl font-bold mb-8">DETECT FRAUD</h1>
          </div>
          <div className="flex flex-wrap gap-10 justify-center items-center">
            <CardDetect className="flex-1"/>
            {showDetectResult && (<CardResult result={detectRes} className='flex-1'/>)}
          </div>

        </div>
    </>
    )
  }
  
  export default function Detect() {
    return (
      <BackendProvider>
        <DetectContent />
      </BackendProvider>
    );
  }
