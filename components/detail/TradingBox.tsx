"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"


const TradingBox = () => {

  const [isClickBuyButton, setIsClickBuyButton] = useState(true)

  const handleClick = () => {
    setIsClickBuyButton(!isClickBuyButton)
  }



  const isBuy = isClickBuyButton ? "bg-[#3CE57F]" : "bg-red-500"
  const isActiveBuyButtonBg = isClickBuyButton ? "bg-[#3CE57F]" : "bg-[#060722]"
  const isActiveSellButtonBg = !isClickBuyButton ? "bg-red-500" : "bg-[#060722]"

  return (
    <div className="w-full pt-6 px-3 flex-col items-center justify-center">
      <div className="flex gap-4 max-w-[486px] w-full">
        <Button onClick={handleClick} className={`hover:bg-slate-400 duration-300 px-4 py-2 w-[252px] h-[68px] text-white text-3xl font-semibold ${isActiveBuyButtonBg} rounded-2xl`}>BUY</Button>
        <Button onClick={handleClick} className={`hover:bg-slate-400 duration-300 px-4 py-2 w-[252px] h-[68px] text-white text-3xl font-semibold ${isActiveSellButtonBg} rounded-2xl`}>SELL</Button>
      </div>
      <div className="flex-col max-w-[486px] w-full bg-slate-950 rounded-2xl mt-4 px-3 py-4">
        <div className="flex justify-between">
          <div className="
            hover:bg-slate-400
            duration-300
            border-none
            cursor-pointer
            flex text-xs items-center justify-center bg-slate-800 rounded-xl px-[25px] py-3">
            Switch to GQUDUX
          </div>
          <div className="
            hover:bg-slate-400
            duration-300
            cursor-pointer
            flex text-xs items-center justify-center bg-slate-800 rounded-xl px-[25px] py-2.5">
            Set max slippage
          </div>
        </div>
        <div className="relative w-full h-[68px] mt-3">
          <Input
            type="number"
            className="px-5  bg-transparent text-2xl font-extrabold w-full h-full border-indigo-500 border-2 rounded-xl pr-12"
            placeholder="0.0"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-6 text-2xl font-semibold">SUI</span>
        </div>
        <div className="flex gap-[5px] pt-2">

          <Button className="  hover:bg-slate-400
          duration-300
          cursor-pointer
          flex text-xs items-center justify-center bg-slate-800 rounded-2xl px-[31px] h-8">Reset</Button>
          <Button className="  hover:bg-slate-400
          duration-300
          cursor-pointer
          flex text-xs items-center justify-center bg-slate-800 rounded-2xl px-[31px] h-8">1 Sui</Button>
          <Button className="  hover:bg-slate-400
          duration-300
          cursor-pointer
          flex text-xs items-center justify-center bg-slate-800 rounded-2xl px-[31px] h-8">5 Sui</Button>
          <Button className="  hover:bg-slate-400
          duration-300
          cursor-pointer
          flex text-xs items-center justify-center bg-slate-800 rounded-2xl px-[31px] h-8">10 Sui</Button>

        </div>

        <div className="text-slate-500 text-lg font-medium pt-[59px]">
          78059293.470617 $gorcia
        </div>
        <Button className={`hover:bg-indigo-300 duration-300 mt-[4px] w-full rounded-xl ${isBuy} py-8 text-white text-3xl font-semibold`}>Place trade</Button>

      </div>
    </div>
  )
}

export default TradingBox
