import { createContext, useState } from 'react';

export const BackendContext = createContext();

export const BackendProvider = ({ children }) => {
  const [trainingRes, setTrainingRes] = useState({});
  const [showDetectResult, setShowDetectResult] = useState(false)
  const [detectRes, setDetectRes] = useState({})


  return (
    <BackendContext.Provider value={{ trainingRes, setTrainingRes, showDetectResult, setShowDetectResult, detectRes, setDetectRes}}>
                                      
      {children}
    </BackendContext.Provider>
  );
};