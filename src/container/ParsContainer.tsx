import { useState } from 'react';

import HTMLRenderer from '../components/parser.tsx';

export const ParsContainer = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={'flex flex-col'}>
      <input
        type="text"
        className="mt-2 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-400"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter html here..."
      />
      <div className={'flex gap-10'}>
        {inputValue && <HTMLRenderer html={inputValue} />}
      </div>
    </div>
  );
};
