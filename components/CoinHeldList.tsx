import Image from "next/image"

import coinImg from "../assets/icons/coinImg.png";

const coinList = [
  {
    id: 1,
    name: "FoXERS",
    amount: 0.00,
    currency: "SUI",
  },
  {
    id: 2,
    name: "FoXERS",
    amount: 0.00,
    currency: "SUI",
  },
  {
    id: 3,
    name: "FoXERS",
    amount: 0.00,
    currency: "SUI",
  },
  {
    id: 4,
    name: "FoXERS",
    amount: 0.00,
    currency: "SUI",
  },
  {
    id: 5,
    name: "FoXERS",
    amount: 0.00,
    currency: "SUI",
  },
];
const CoinHeldList = () => {

  return (
    <>
      {coinList.map((coin, index) => () => {
        <div key={coin.id}>
          <div className="w-[456px] h-[60px] p-[5px] bg-slate-800 rounded-xl justify-start items-start gap-3 inline-flex">
            <Image src={coinImg} alt={"123"} className="w-[70px] h-[70px] rounded-full" />
            <div className="flex-col justify-start items-start gap-px inline-flex">
              <div className="justify-start items-start gap-[5px] inline-flex">
                <div className="text-white text-sm font-bold  leading-normal">2</div>
                <div className="text-white text-sm font-bold  leading-normal">FoXERS</div>
              </div>
              <div className="justify-start items-start gap-[3px] inline-flex">
                <div className="text-indigo-400 text-sm font-bold  leading-normal">0.00</div>
                <div className="text-indigo-400 text-sm font-bold  leading-normal">SUI</div>
              </div>
            </div>
          </div>
        </div>
      })}


    </>
  )
}

export default CoinHeldList
