import React, { useState } from 'react';
import { Card as TremorCard, LineChart } from '@tremor/react';

const data = [
  { epoch: 1, 'Rule-Based': 0.75, 'Traditional ML': 0.70, 'Neural Network': 0.85 },
  { epoch: 2, 'Rule-Based': 0.80, 'Traditional ML': 0.75, 'Neural Network': 0.88 },
  { epoch: 3, 'Rule-Based': 0.85, 'Traditional ML': 0.78, 'Neural Network': 0.90 },
  { epoch: 4, 'Rule-Based': 0.88, 'Traditional ML': 0.80, 'Neural Network': 0.92 },
  { epoch: 5, 'Rule-Based': 0.90, 'Traditional ML': 0.82, 'Neural Network': 0.95 },
];

export default function PrecisionLineChart() {
  const [selectedCategory, setSelectedCategory] = useState('Rule-Based', 'Traditional ML', 'Neural Network');

  return (
    <TremorCard className="w-full h-full bg-transparent">
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        {selectedCategory} Model Precision Over Epochs
      </h3>
      <LineChart
        className=" mt-4 h-72"
        data={data}
        index="epoch"
        colors={['blue', 'red', 'green']}
        categories={['Rule-Based', 'Traditional ML', 'Neural Network']}
        yAxisWidth={50}
        onValueChange={(v) => setSelectedCategory(v?.category || 'Rule-Based' || 'Traditional ML' || 'Neural Network' )}
        connectNulls={true} 
        lineStyle="smooth"
      />
    </TremorCard>
  );
}