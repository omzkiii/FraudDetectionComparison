import { useState, useContext } from 'react';
import { SplitContext } from '../context/SplitContext';
import { BackendContext } from '../context/BackendContext';

const LoadingButton = ({ onClick, children, className, size }) => {
  const { selectedSplit, setShowComparisonCards } = useContext(SplitContext);
  const { setTrainingRes } = useContext(BackendContext);


  const [isLoading, setIsLoading] = useState(false);

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
      className={`px-4 py-2 font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${className}`}
      disabled={isLoading || !selectedSplit}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="spinner mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton;