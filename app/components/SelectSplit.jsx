import { useContext } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { SplitContext } from './SplitContext';

const splitType = [
  { key: '1', label: 'Train 70% - Test 30%' },
  { key: '2', label: 'Train 80% - Test 20%' },
  { key: '3', label: 'Train 50% - Test 50%' }
];

export default function SelectSplit() {
  const { setSelectedSplit } = useContext(SplitContext);

  const handleSelectChange = (value) => {
    setSelectedSplit(value);
  };

  return (
    <Select label="Select train/test split" className="max-w-xs" onChange={handleSelectChange}>
      {splitType.map((st) => (
        <SelectItem key={st.key} value={st.key}>
          {st.label}
        </SelectItem>
      ))}
    </Select>
  );
}