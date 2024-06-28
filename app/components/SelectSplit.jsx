"use client";

import React from "react";
import {Select, SelectItem} from "@nextui-org/react";

const splitType = [
    { key: '1', label: 'Option 1' },
    { key: '2', label: 'Option 2' },
    { key: '3', label: 'Option 3' }
  ];

export default function SelectSplit() {
  return (
      <Select 
        label="Select train/test split" 
        className="max-w-xs" 
      >
        {splitType.map((st) => (
        <SelectItem key={st.key} value={st.key}>
          {st.label}
        </SelectItem>
        ))}
      </Select>
  );
}
