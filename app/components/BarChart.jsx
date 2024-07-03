import { useContext } from 'react';
import { Card as TremorCard, BarChart } from '@tremor/react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Legend, Title, Tooltip} from "chart.js"
import { BackendContext } from '../context/BackendContext';


ChartJS.register(CategoryScale, LinearScale, BarElement, Legend, Title, Tooltip);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Metrics by Class',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 1,
    },
  },
};

const MyBarChart = ({}) => {
  const { trainingRes } = useContext(BackendContext);
  const data = {
    labels: ['Rule-Based', 'Traditional ML', 'Neural Network'],
    datasets: [
      {
        label: 'Accuracy',
        data: trainingRes.accuracy,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Precision',
        data: trainingRes.precision,
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
      {
        label: 'Recall',
        data: trainingRes.recall,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'F1-score',
        data: trainingRes.f1,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <TremorCard className="w-full h-full bg-transparent p-4">
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Result based on <a href='https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset/data' className='underline'> UCI Spam/Ham Dataset </a>
      </h3>
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        
      </h3>
      <div className="mt-6">
        <Bar data = {data} options={options}
        />
      </div>
    </TremorCard>
  );
};

export default MyBarChart;