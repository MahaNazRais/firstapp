import React, { useState } from 'react';

export default function Input  ()  {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Input value: {inputValue}</p>
    </div>
  );
};
