import React, { useState } from 'react';

export const Switch = ({ 
  id, 
  checked, 
  onCheckedChange,
  className = ''
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onCheckedChange(newValue);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      onClick={toggle}
      className={`${className} relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        isChecked ? 'bg-blue-600' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          isChecked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
};
