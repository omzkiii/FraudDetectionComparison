import { useContext } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { SplitContext } from '../context/SplitContext';

const splitType = [
  { key: '0.1', label: '0.1' },
  { key: '0.2', label: '0.2' },
  { key: '0.3', label: '0.3' },
  { key: '0.4', label: '0.4' },
  { key: '0.5', label: '0.5' },
];

export default function SelectSplit() {
  const { selectedSplit, setSelectedSplit } = useContext(SplitContext);

  const handleSelectChange = (e) => {
    const value = parseFloat(e.target.value)
    setSelectedSplit(value);
  };

  return (
    <Select value={selectedSplit} label="Select test size" className="max-w-xs" onChange={handleSelectChange}>
      {splitType.map((st) => (
        <SelectItem key={st.key} value={st.label}>
          {st.label}
        </SelectItem>
      ))}
    </Select>
  );
}