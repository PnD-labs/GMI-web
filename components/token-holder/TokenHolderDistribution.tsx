
const mockData = [
  {
    id: 0,
    tokenHolderName: '0x1234',
    holdingPercentage: "72.46%",
  },
  {
    id: 1,
    tokenHolderName: '0x5678',
    holdingPercentage: "1.45%",
  },
  {
    id: 2,
    tokenHolderName: '0x9101',
    holdingPercentage: "1.45%",
  },
  {
    id: 3,
    tokenHolderName: '0x1121',
    holdingPercentage: "1.45%",
  },
  {
    id: 4,
    tokenHolderName: '0x3141',
    holdingPercentage: "1.45%",
  },
  {
    id: 5,
    tokenHolderName: '0x5161',
    holdingPercentage: "1.45%",
  },
  {
    id: 6,
    tokenHolderName: '0x7181',
    holdingPercentage: "1.45%",
  },
  {
    id: 7,
    tokenHolderName: '0x9202',
    holdingPercentage: "1.45%",
  },
  {
    id: 8,
    tokenHolderName: '0x1222',
    holdingPercentage: "1.45%",
  },
  {
    id: 9,
    tokenHolderName: '0x3242',
    holdingPercentage: "1.45%",
  },
  {
    id: 10,
    tokenHolderName: '0x5262',
    holdingPercentage: "1.45%",
  },
  {
    id: 11,
    tokenHolderName: '0x7282',
    holdingPercentage: "1.45%",
  },
  {
    id: 12,
    tokenHolderName: '0x9303',
    holdingPercentage: "1.45%",
  },
  {
    id: 13,
    tokenHolderName: '0x1323',
    holdingPercentage: "1.45%",
  },
  {
    id: 14,
    tokenHolderName: '0x3343',
    holdingPercentage: "1.45%",
  },
  {
    id: 15,
    tokenHolderName: '0x5363',
    holdingPercentage: "1.45%",
  },
  {
    id: 16,
    tokenHolderName: '0x7383',
    holdingPercentage: "1.45%",
  },
  {
    id: 17,
    tokenHolderName: '0x9404',
    holdingPercentage: "1.45%",
  },
  {
    id: 18,
    tokenHolderName: '0x1424',
    holdingPercentage: "1.45%",
  },
  {
    id: 19,
    tokenHolderName: '0x3444',
    holdingPercentage: "1.45%",
  }
];


const TokenHolderDistributionCard = () => {
  //TDOO: Token Holder 상위 20개 그중 1등은 bonding curve 표
  return (
    <div className="w-full max-w-[520px] mt-6 ">
      <span className="text-slate-500
      text-2xl
      font-semibold">Token Holder Distribution</span>
      {mockData.map((value, index) => {
        const isTopNickname = index === 0 ? "(bonding curve)" : "(dev)"
        const isTopImoji = index === 0 ? "🥇" : "🥈"

        return (
          <div key={index} className="flex justify-between items-center mt-0">
            <div className="flex items-start gap-0">
              <span className="text-slate-500 text-lg font-semibold">{value.id + 1}</span>
              <span className="text-slate-500 text-lg font-semibold ml-2">{value.tokenHolderName}</span>
              <span className="text-slate-500 text-lg font-semibold ml-2">{isTopNickname}</span>
              <span className="text-slate-500 text-lg font-semibold ml-2">{isTopImoji}</span>
            </div>
            <span className="text-slate-500 text-lg font-semibold">{value.holdingPercentage}</span>
          </div>
        )

      })}

    </div>
  )
}

export default TokenHolderDistributionCard
