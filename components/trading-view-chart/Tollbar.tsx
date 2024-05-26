'use client'

import { FC } from 'react';

interface ToolbarProps {
  onChange: (timeframe: string) => void;
}

const Toolbar: FC<ToolbarProps> = ({ onChange }) => {
  const timeframes = ['1m', '3m', '5m', '15m', '30m', '45m', '1h', '2h', '3h', '4h', '1d', '1w', '1M'];


  return (
    <div className="flex space-x-2 p-2 bg-gray-100 rounded-lg shadow-sm">
      {timeframes.map((timeframe) => (
        <button
          key={timeframe}
          onClick={() => onChange(timeframe)}
          className="px-4 py-2 bg-white border rounded hover:bg-gray-200 transition"
        >
          {timeframe}
        </button>
      ))}
    </div>
  );
};


export default Toolbar;
