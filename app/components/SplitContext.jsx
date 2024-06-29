import { createContext, useState } from 'react';

export const SplitContext = createContext();

export const SplitProvider = ({ children }) => {
  const [selectedSplit, setSelectedSplit] = useState('');

  return (
    <SplitContext.Provider value={{ selectedSplit, setSelectedSplit }}>
      {children}
    </SplitContext.Provider>
  );
};