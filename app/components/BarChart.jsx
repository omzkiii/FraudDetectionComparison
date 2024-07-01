import React from 'react';
import { Card as TremorCard, BarChart } from '@tremor/react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Legend, Title, Tooltip} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Legend, Title, Tooltip);
const data = {
  labels: ['Rule-Based', 'Traditional ML', 'Neural Network'],
  datasets: [
    {
      label: 'Accuracy',
      data: [0.85, 0.75, 0.9],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
    {
      label: 'Precision',
      data: [0.8, 0.7, 0.85],
      backgroundColor: 'rgba(255, 159, 64, 0.6)',
    },
    {
      label: 'Recall',
      data: [0.9, 0.8, 0.95],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
    {
      label: 'F1-score',
      data: [0.85, 0.75, 0.9],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
    },
  ],
};

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

const MyBarChart = () => {
  return (
    <TremorCard className="w-full h-full bg-transparent p-4">
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Split: Train-80%; Test-20%
      </h3>
      <div className="mt-6">
        <Bar data = {data} options={options}
        />
      </div>
    </TremorCard>
  );
};

export default MyBarChart;