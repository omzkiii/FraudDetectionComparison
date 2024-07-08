import { useState, useContext } from 'react';
import { SplitContext } from '../context/SplitContext';
import { BackendContext } from '../context/BackendContext';
import { Spinner } from "@nextui-org/react"

const LoadingButton = ({ onClick, children, className, size }) => {
  const { selectedSplit, setShowComparisonCards } = useContext(SplitContext);
  const { setTrainingRes } = useContext(BackendContext);


  const [isLoading1, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      setShowComparisonCards(false)
      const response = await onClick();
      const data = await response.json()
      console.log(data)
      setTrainingRes(data)
      setShowComparisonCards(true)
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 font-semibold rounded-md shadow-md hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${className}`}
      disabled={isLoading1 || !selectedSplit}
    >
      {isLoading1 ? (
        <div className="flex items-center justify-center mt 4">
          <Spinner className="mr-3"size="sm"/>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton;