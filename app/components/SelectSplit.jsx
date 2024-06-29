import { useContext } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { SplitContext } from './SplitContext';

const splitType = [
  { key: '1', label: 'Rule-Based' },
  { key: '2', label: 'Traditional ML' },
  { key: '3', label: 'Neural Network' }
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