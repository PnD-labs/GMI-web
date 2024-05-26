import { BarChart, CandlestickChart, HandCoins, Tag, Volume } from "lucide-react"


const DetailInfo = () => {
  return (
    <div className="w-full flex gap-6 mt-[113px]">
      <div className="max-w-96 w-full border-t-2 border-indigo-500 pt-4">
        <div className="flex gap-[10px] pb-3" >
          <Tag />
          <span className="text-indigo-200 text-lg font-extrabold">
            Price
          </span>
        </div>
        <span className="text-indigo-200 text-3xl font-extrabold">
          $10,646</span>
      </div>
      <div className="max-w-96 w-full border-t-2 border-indigo-500 pt-4">
        <div className="flex gap-[10px] pb-3" >
          <BarChart />
          <span className="text-indigo-200 text-lg font-extrabold">
            Volume
          </span>
        </div>
        <span className="text-indigo-200 text-3xl font-extrabold">$10,646</span>
      </div>
      <div className="max-w-96 w-full border-t-2 border-indigo-500 pt-4">
        <div className="flex gap-[10px] pb-3" >
          <CandlestickChart />
          <span className="text-indigo-200 text-lg font-extrabold">
            Market Cap
          </span>
        </div>
        <span className="text-indigo-200 text-3xl font-extrabold">
          $10,646</span>
      </div>
      <div className="max-w-96 w-full border-t-2 border-indigo-500 pt-4">
        <div className="flex gap-[10px] pb-3" >
          <HandCoins />
          <span className="text-indigo-200 text-lg font-extrabold">
            Virtual liquidity
          </span>
        </div>
        <span className="text-indigo-200 text-3xl font-extrabold">$10,646</span>
      </div>
    </div>
  )
}

export default DetailInfo
