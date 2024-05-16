import Image from "next/image"
import { Button } from "./ui/button"


const Top3CoinSection = () => {

  const Top3CoinList = [
    {
      name: "Bitcoin",
      price: "1,000,000",
      change: "0.5",
      image: "https://www.cryptocompare.com/media/37746251/btc.png"
    },
    {
      name: "Bitcoin",
      price: "1,000,000",
      change: "0.5",
      image: "https://www.cryptocompare.com/media/37746251/btc.png"
    },
    {
      name: "Bitcoin",
      price: "1,000,000",
      change: "0.5",
      image: "https://www.cryptocompare.com/media/37746251/btc.png"
    }
  ]

  return (
    <div className="w-full h-full flex gap-6">
      {Top3CoinList.map((coin, index) => (
        <div
          key={index}
          className="w-full px-3 pr-11 py-[22px] bg-slate-950 rounded-2xl border-2 border-indigo-500 flex justify-start items-start gap-3"
        >
          <div className="w-full h-[435px] rounded-2xl border border-indigo-500 relative">
            <Image fill objectFit="cover" src={coin.image} alt={coin.name} className="rounded-2xl" />
          </div>
          <div className="flex flex-col justify-between h-full w-[200px]">
            <div className="flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="gap-2 w-[181px] h-11 px-2 my-2 bg-indigo-500 rounded-2xl shadow justify-center items-center flex">
                <div className="text-white text-xl font-bold">{coin.name}</div>
              </div>
              <div className="flex-col justify-start items-start flex gap-2.5">
                <div className="justify-center items-center gap-[3px] inline-flex">
                  <div className="text-white text-sm font-bold">Created by</div>
                  <div className="w-[18px] h-[18px] rounded bg-white" />
                  <div className="text-white text-sm font-bold">dogwifblue</div>
                </div>
                <div className="flex gap-1">
                  <div className="text-cyan-500 text-3xl font-bold">market cap: 25.46K</div>
                </div>
                <div className="text-slate-500 text-xs font-normal">replies: 70</div>
                <div className="text-slate-500 text-xs font-bold">(ticker: dogwifblue)</div>
              </div>
            </div>
            <div className="w-full">
              <Button size="sm" className="hover:bg-indigo-400 w-full bg-indigo-500 px-6 py-2 rounded-xl">BUY</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Top3CoinSection
