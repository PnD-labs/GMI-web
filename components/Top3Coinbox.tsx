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
  ]

  return (
    <div className="w-full h-full flex gap-6">
      {Top3CoinList.map((coin, index) => (
        <div
          key={index}
          className="w-full px-3 pr-11 py-[22px] bg-slate-950 rounded-2xl border-2 border-indigo-500 flex justify-start items-start gap-3"
        >
          <div className="w-full h-[435px] rounded-2xl   relative">
            <Image fill objectFit="cover" src={coin.image} alt={coin.name} className="rounded-2xl" />
          </div>
        
        </div>
      ))}
    </div>
  )
}

export default Top3CoinSection
