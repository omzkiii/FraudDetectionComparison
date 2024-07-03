import { createContext, useState } from 'react';

export const SplitContext = createContext();

export const SplitProvider = ({ children }) => {
  const [selectedSplit, setSelectedSplit] = useState('');
  const [showComparisonCards, setShowComparisonCards] = useState(false);


  return (
    <SplitContext.Provider value={{ selectedSplit, setSelectedSplit, showComparisonCards, setShowComparisonCards }}>
                                      
      {children}
    </SplitContext.Provider>
  );
};