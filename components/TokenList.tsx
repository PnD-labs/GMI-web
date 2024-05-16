"use client";

import TokenCard from "./TokenCard";

const mockArr = () => {
  return Array(18).fill(0);
};

const TokenList = () => {
  const arr = mockArr();
  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {arr.map((_, index) => (
          <TokenCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default TokenList;
