"use client";
import React, { useState } from "react";

const Counter: React.FC<{ label: string }> = ({ label }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="flex items-center justify-between  p-2 mb-2">
      <span>{label}</span>
      <div className="flex items-center">
        <button
          onClick={decrement}
          className="px-3 py-1 text-black bg-main rounded-full border-2 border-orange-300"
        >
          -
        </button>
        <span className="px-4">{count}</span>
        <button
          onClick={increment}
          className="px-3 py-1 text-black bg-main rounded-full border-2 border-orange-300"
        >
          +
        </button>
      </div>
    </div>
  );
};
export default Counter;
